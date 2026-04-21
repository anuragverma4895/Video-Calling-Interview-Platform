import { useUser } from "@clerk/clerk-react";
import { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate, useParams } from "react-router";
import { useEndSession, useJoinSession, useSessionById } from "../hooks/useSessions";
import { PROBLEMS } from "../data/problems";
import { executeCode } from "../lib/piston";
import { doOutputsMatch } from "../lib/testExecution";
import Navbar from "../components/Navbar";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { getDifficultyBadgeClass } from "../lib/utils";
import { Loader2Icon, LogOutIcon, PhoneOffIcon, LockIcon, UnlockIcon } from "lucide-react";
import CodeEditorPanel from "../components/CodeEditorPanel";
import OutputPanel from "../components/OutputPanel";

import useStreamClient from "../hooks/useStreamClient";
import { StreamCall, StreamVideo } from "@stream-io/video-react-sdk";
import VideoCallUI from "../components/VideoCallUI";

import toast from "react-hot-toast";
import confetti from "canvas-confetti";

function SessionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  // Access control state
  const [participantCanEdit, setParticipantCanEdit] = useState(false);
  const [accessRequested, setAccessRequested] = useState(false);

  const { data: sessionData, isLoading: loadingSession, refetch } = useSessionById(id);

  const joinSessionMutation = useJoinSession();
  const endSessionMutation = useEndSession();

  const session = sessionData?.session;
  const isHost = session?.host?.clerkId === user?.id;
  const isParticipant = session?.participant?.clerkId === user?.id;

  const { call, channel, chatClient, isInitializingCall, streamClient } = useStreamClient(
    session,
    loadingSession,
    isHost,
    isParticipant
  );

  // find the problem data based on session problem title
  const problemData = session?.problem
    ? Object.values(PROBLEMS).find((p) => p.title === session.problem)
    : null;

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(problemData?.starterCode?.[selectedLanguage] || "");

  // Ref to avoid broadcasting self-updates
  const isRemoteUpdate = useRef(false);
  const syncTimeoutRef = useRef(null);

  const handleGrantAccess = useCallback(
    async (targetUserId) => {
      if (!channel) return;
      try {
        await channel.sendEvent({
          type: "custom",
          custom_type: "access_grant",
          target_user: targetUserId,
        });
        setParticipantCanEdit(true);
        toast.success("Edit access granted!");
      } catch {
        toast.error("Failed to grant access");
      }
    },
    [channel]
  );

  // auto-join session if user is not already a participant and not the host
  useEffect(() => {
    if (!session || !user || loadingSession) return;
    if (isHost || isParticipant) return;

    joinSessionMutation.mutate(id, { onSuccess: refetch });
  }, [session, user, loadingSession, isHost, isParticipant, id, joinSessionMutation, refetch]);

  // redirect the "participant" when session ends
  useEffect(() => {
    if (!session || loadingSession) return;
    if (session.status === "completed") navigate("/dashboard");
  }, [session, loadingSession, navigate]);

  // update code when problem loads or changes
  useEffect(() => {
    if (problemData?.starterCode?.[selectedLanguage]) {
      setCode(problemData.starterCode[selectedLanguage]);
    }
  }, [problemData, selectedLanguage]);

  useEffect(() => {
    return () => {
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
    };
  }, []);

  // ===== REAL-TIME CODE SYNC via Stream Chat Custom Events =====
  useEffect(() => {
    if (!channel) return;

    const handleCustomEvent = (event) => {
      const { type: eventType } = event;

      if (eventType === "custom" && event.custom_type === "code_sync") {
        // Someone else changed the code
        if (event.user?.id !== user?.id) {
          isRemoteUpdate.current = true;
          setCode(event.code);
          if (event.language) setSelectedLanguage(event.language);
          // Reset after a tick
          setTimeout(() => { isRemoteUpdate.current = false; }, 50);
        }
      }

      if (eventType === "custom" && event.custom_type === "access_grant") {
        if (event.target_user === user?.id) {
          setParticipantCanEdit(true);
          setAccessRequested(false);
          toast.success("Host granted you edit access!");
        }
      }

      if (eventType === "custom" && event.custom_type === "access_revoke") {
        if (event.target_user === user?.id) {
          setParticipantCanEdit(false);
          toast("Host revoked your edit access.", { icon: "🔒" });
        }
      }

      if (eventType === "custom" && event.custom_type === "access_request") {
        if (isHost) {
          toast(
            (t) => (
              <div className="flex flex-col gap-2">
                <p className="font-semibold">{event.requester_name} is requesting edit access</p>
                <div className="flex gap-2">
                  <button
                    className="btn btn-success btn-xs"
                    onClick={() => {
                      handleGrantAccess(event.requester_id);
                      toast.dismiss(t.id);
                    }}
                  >
                    Grant
                  </button>
                  <button
                    className="btn btn-error btn-xs"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    Deny
                  </button>
                </div>
              </div>
            ),
            { duration: 15000 }
          );
        }
      }
    };

    channel.on("custom", handleCustomEvent);
    return () => channel.off("custom", handleCustomEvent);
  }, [channel, user, isHost, handleGrantAccess]);

  // Broadcast code changes (debounced)
  const broadcastCodeChange = useCallback(
    (newCode) => {
      if (!channel || isRemoteUpdate.current) return;

      if (syncTimeoutRef.current) clearTimeout(syncTimeoutRef.current);
      syncTimeoutRef.current = setTimeout(async () => {
        try {
          await channel.sendEvent({
            type: "custom",
            custom_type: "code_sync",
            code: newCode,
            language: selectedLanguage,
          });
        } catch {
          // Silently fail - sync is best-effort
        }
      }, 300);
    },
    [channel, selectedLanguage]
  );

  const handleCodeChange = (value) => {
    setCode(value);
    broadcastCodeChange(value);
  };

  // Access control functions
  const handleRequestAccess = async () => {
    if (!channel) return;
    try {
      await channel.sendEvent({
        type: "custom",
        custom_type: "access_request",
        requester_id: user?.id,
        requester_name: user?.fullName || user?.username || "Participant",
      });
      setAccessRequested(true);
      toast.success("Access request sent to host!");
    } catch {
      toast.error("Failed to send request");
    }
  };

  const handleRevokeAccess = useCallback(async () => {
    if (!channel || !session?.participant) return;
    try {
      await channel.sendEvent({
        type: "custom",
        custom_type: "access_revoke",
        target_user: session.participant.clerkId,
      });
      toast("Edit access revoked", { icon: "🔒" });
    } catch {
      toast.error("Failed to revoke access");
    }
  }, [channel, session?.participant]);

  const canEdit = isHost || participantCanEdit;

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    const starterCode = problemData?.starterCode?.[newLang] || "";
    setCode(starterCode);
    setOutput(null);

    // Broadcast language change
    if (channel && !isRemoteUpdate.current) {
      channel.sendEvent({
        type: "custom",
        custom_type: "code_sync",
        code: starterCode,
        language: newLang,
      }).catch(() => {});
    }
  };

  const triggerConfetti = () => {
    confetti({ particleCount: 80, spread: 250, origin: { x: 0.2, y: 0.6 } });
    confetti({ particleCount: 80, spread: 250, origin: { x: 0.8, y: 0.6 } });
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);

    const result = await executeCode(selectedLanguage, code);
    setOutput(result);
    setIsRunning(false);

    if (result.success && problemData?.expectedOutput?.[selectedLanguage]) {
      const testsPassed = doOutputsMatch(result.output, problemData.expectedOutput[selectedLanguage]);
      if (testsPassed) {
        triggerConfetti();
        toast.success("All tests passed!");
      } else {
        toast.error("Tests failed. Check your output!");
      }
    } else if (!result.success) {
      toast.error(result.error?.split("\n")[0] || "Code execution failed!");
    }
  };

  const handleSubmitCode = async () => {
    setIsSubmitting(true);
    setSubmitResult(null);
    setOutput(null);

    if (!hiddenTests || !hiddenTests.code) {
      setSubmitResult({ passed: false, message: "No hidden test cases available for this language." });
      setIsSubmitting(false);
      return;
    }

    // First run visible tests
    const visibleResult = await executeCode(selectedLanguage, code);
    if (!visibleResult.success) {
      setOutput(visibleResult);
      setSubmitResult({ passed: false, message: "Code has errors. Fix them before submitting." });
      setIsSubmitting(false);
      toast.error("Code has errors!");
      return;
    }

    const expectedOutput = problemData?.expectedOutput?.[selectedLanguage];
    if (expectedOutput && !doOutputsMatch(visibleResult.output, expectedOutput)) {
      setOutput(visibleResult);
      setSubmitResult({ passed: false, message: "Visible test cases failed. Fix them first." });
      setIsSubmitting(false);
      toast.error("Visible test cases failed!");
      return;
    }

    // Run hidden tests
    const hiddenCode = buildHiddenTestSource(selectedLanguage, code, hiddenTests.code);
    const hiddenResult = await executeCode(selectedLanguage, hiddenCode);

    if (!hiddenResult.success) {
      setOutput(hiddenResult);
      setSubmitResult({ passed: false, message: "Hidden test cases caused an error.", actual: hiddenResult.error, expected: hiddenTests.expected });
      setIsSubmitting(false);
      toast.error("Hidden test cases failed!");
      return;
    }

    const hiddenPassed = doesOutputEndWithExpected(hiddenResult.output, hiddenTests.expected);
    if (hiddenPassed) {
      triggerConfetti();
      setSubmitResult({ passed: true, message: "All visible and hidden test cases passed! 🎉" });
      toast.success("🎉 Solution Accepted!");
    } else {
      setOutput(hiddenResult);
      setSubmitResult({ passed: false, message: "Hidden test cases failed.", expected: hiddenTests.expected, actual: hiddenResult.output });
      toast.error("Hidden test cases failed!");
    }
    setIsSubmitting(false);
  };

  const handleEndSession = () => {
    if (confirm("Are you sure you want to end this session? All participants will be notified.")) {
      endSessionMutation.mutate(id, { onSuccess: () => navigate("/dashboard") });
    }
  };

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <Navbar />

      <div className="flex-1">
        <PanelGroup direction="horizontal">
          {/* LEFT PANEL - CODE EDITOR & PROBLEM DETAILS */}
          <Panel defaultSize={50} minSize={30}>
            <PanelGroup direction="vertical">
              {/* PROBLEM DSC PANEL */}
              <Panel defaultSize={50} minSize={20}>
                <div className="h-full overflow-y-auto bg-base-200">
                  {/* HEADER SECTION */}
                  <div className="p-6 bg-base-100 border-b border-base-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h1 className="text-3xl font-bold text-base-content">
                          {session?.problem || "Loading..."}
                        </h1>
                        {problemData?.category && (
                          <p className="text-base-content/60 mt-1">{problemData.category}</p>
                        )}
                        <p className="text-base-content/60 mt-2">
                          Host: {session?.host?.name || "Loading..."} •{" "}
                          {session?.participant ? 2 : 1}/2 participants
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`badge badge-lg ${getDifficultyBadgeClass(
                            session?.difficulty
                          )}`}
                        >
                          {session?.difficulty?.slice(0, 1).toUpperCase() +
                            session?.difficulty?.slice(1) || "Easy"}
                        </span>
                        {isHost && session?.status === "active" && (
                          <button
                            onClick={handleEndSession}
                            disabled={endSessionMutation.isPending}
                            className="btn btn-error btn-sm gap-2"
                          >
                            {endSessionMutation.isPending ? (
                              <Loader2Icon className="w-4 h-4 animate-spin" />
                            ) : (
                              <LogOutIcon className="w-4 h-4" />
                            )}
                            End Session
                          </button>
                        )}
                        {session?.status === "completed" && (
                          <span className="badge badge-ghost badge-lg">Completed</span>
                        )}
                      </div>
                    </div>

                    {/* Access Control Bar */}
                    {isHost && session?.participant && (
                      <div className="flex items-center gap-2 mt-3 p-2 bg-base-200 rounded-lg">
                        <span className="text-xs text-base-content/60">Participant Edit:</span>
                        <button
                          className="btn btn-xs btn-outline gap-1"
                          onClick={
                            participantCanEdit
                              ? () => {
                                  setParticipantCanEdit(false);
                                  handleRevokeAccess();
                                }
                              : () => handleGrantAccess(session.participant.clerkId)
                          }
                        >
                          {participantCanEdit ? (
                            <><UnlockIcon className="w-3 h-3" /> Revoke Access</>
                          ) : (
                            <><LockIcon className="w-3 h-3" /> Grant Access</>
                          )}
                        </button>
                      </div>
                    )}

                    {isParticipant && !participantCanEdit && !accessRequested && (
                      <div className="mt-3 p-2 bg-warning/10 rounded-lg flex items-center justify-between">
                        <span className="text-xs text-warning">🔒 You are in read-only mode</span>
                        <button className="btn btn-xs btn-warning" onClick={handleRequestAccess}>
                          Request Edit Access
                        </button>
                      </div>
                    )}

                    {isParticipant && !participantCanEdit && accessRequested && (
                      <div className="mt-3 p-2 bg-info/10 rounded-lg">
                        <span className="text-xs text-info">⏳ Waiting for host to grant access...</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-6">
                    {/* problem desc */}
                    {problemData?.description && (
                      <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                        <h2 className="text-xl font-bold mb-4 text-base-content">Description</h2>
                        <div className="space-y-3 text-base leading-relaxed">
                          <p className="text-base-content/90">{problemData.description.text}</p>
                          {problemData.description.notes?.map((note, idx) => (
                            <p key={idx} className="text-base-content/90">
                              {note}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* examples section */}
                    {problemData?.examples && problemData.examples.length > 0 && (
                      <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                        <h2 className="text-xl font-bold mb-4 text-base-content">Examples</h2>

                        <div className="space-y-4">
                          {problemData.examples.map((example, idx) => (
                            <div key={idx}>
                              <div className="flex items-center gap-2 mb-2">
                                <span className="badge badge-sm">{idx + 1}</span>
                                <p className="font-semibold text-base-content">Example {idx + 1}</p>
                              </div>
                              <div className="bg-base-200 rounded-lg p-4 font-mono text-sm space-y-1.5">
                                <div className="flex gap-2">
                                  <span className="text-primary font-bold min-w-[70px]">
                                    Input:
                                  </span>
                                  <span>{example.input}</span>
                                </div>
                                <div className="flex gap-2">
                                  <span className="text-secondary font-bold min-w-[70px]">
                                    Output:
                                  </span>
                                  <span>{example.output}</span>
                                </div>
                                {example.explanation && (
                                  <div className="pt-2 border-t border-base-300 mt-2">
                                    <span className="text-base-content/60 font-sans text-xs">
                                      <span className="font-semibold">Explanation:</span>{" "}
                                      {example.explanation}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Constraints */}
                    {problemData?.constraints && problemData.constraints.length > 0 && (
                      <div className="bg-base-100 rounded-xl shadow-sm p-5 border border-base-300">
                        <h2 className="text-xl font-bold mb-4 text-base-content">Constraints</h2>
                        <ul className="space-y-2 text-base-content/90">
                          {problemData.constraints.map((constraint, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-primary">•</span>
                              <code className="text-sm">{constraint}</code>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Panel>

              <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

              <Panel defaultSize={50} minSize={20}>
                <PanelGroup direction="vertical">
                  <Panel defaultSize={70} minSize={30}>
                    <CodeEditorPanel
                      selectedLanguage={selectedLanguage}
                      code={code}
                      isRunning={isRunning}
                      isSubmitting={isSubmitting}
                      onLanguageChange={handleLanguageChange}
                      onCodeChange={canEdit ? handleCodeChange : undefined}
                      onRunCode={handleRunCode}
                      onSubmitCode={canSubmit ? handleSubmitCode : undefined}
                      readOnly={!canEdit}
                      submitHint={
                        canSubmit
                          ? ""
                          : "Submit is hidden for this language because no hidden test cases are configured yet."
                      }
                    />
                  </Panel>

                  <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

                  <Panel defaultSize={30} minSize={15}>
                    <OutputPanel output={output} submitResult={submitResult} />
                  </Panel>
                </PanelGroup>
              </Panel>
            </PanelGroup>
          </Panel>

          <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

          {/* RIGHT PANEL - VIDEO CALLS & CHAT */}
          <Panel defaultSize={50} minSize={30}>
            <div className="h-full bg-base-200 p-4 overflow-auto">
              {isInitializingCall ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
                    <p className="text-lg">Connecting to video call...</p>
                  </div>
                </div>
              ) : !streamClient || !call ? (
                <div className="h-full flex items-center justify-center">
                  <div className="card bg-base-100 shadow-xl max-w-md">
                    <div className="card-body items-center text-center">
                      <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mb-4">
                        <PhoneOffIcon className="w-12 h-12 text-error" />
                      </div>
                      <h2 className="card-title text-2xl">Connection Failed</h2>
                      <p className="text-base-content/70">Unable to connect to the video call</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full">
                  <StreamVideo client={streamClient}>
                    <StreamCall call={call}>
                      <VideoCallUI chatClient={chatClient} channel={channel} />
                    </StreamCall>
                  </StreamVideo>
                </div>
              )}
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default SessionPage;
