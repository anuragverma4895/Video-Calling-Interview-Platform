import { useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import toast from "react-hot-toast";
import {
  ArrowRightIcon,
  Code2Icon,
  CopyIcon,
  CrownIcon,
  KeyRoundIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
  LoaderIcon,
} from "lucide-react";
import { getDifficultyBadgeClass } from "../lib/utils";
import { useJoinSession } from "../hooks/useSessions";

function ActiveSessions({ sessions = [], isLoading, isUserInSession }) {
  const navigate = useNavigate();
  const { user } = useUser();
  const joinSessionMutation = useJoinSession();
  const [selectedSession, setSelectedSession] = useState(null);
  const [inviteCode, setInviteCode] = useState("");

  const copyInviteCode = async (code) => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      toast.success("Invite code copied");
    } catch {
      toast.error("Unable to copy invite code");
    }
  };

  const openJoinModal = (session) => {
    setSelectedSession(session);
    setInviteCode("");
  };

  const closeJoinModal = () => {
    setSelectedSession(null);
    setInviteCode("");
  };

  const handleJoinWithCode = (event) => {
    event.preventDefault();

    if (!selectedSession || !inviteCode.trim()) {
      toast.error("Enter the invite code to join this session");
      return;
    }

    joinSessionMutation.mutate(
      { id: selectedSession._id, inviteCode },
      {
        onSuccess: (data) => {
          closeJoinModal();
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };

  return (
    <>
      <div className="lg:col-span-2 card bg-base-100 border-2 border-primary/20 hover:border-primary/30 h-full">
        <div className="card-body">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-xl">
                <ZapIcon className="size-5" />
              </div>
              <h2 className="text-2xl font-black">Live Sessions</h2>
            </div>

            <div className="flex items-center gap-2">
              <div className="size-2 bg-success rounded-full" />
              <span className="text-sm font-medium text-success">{sessions.length} active</span>
            </div>
          </div>

          <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <LoaderIcon className="size-10 animate-spin text-primary" />
              </div>
            ) : sessions.length > 0 ? (
              sessions.map((session) => {
                const userInSession = isUserInSession(session);
                const isHost = session.host?.clerkId === user?.id;
                const isFull = Boolean(session.participant) && !userInSession;

                return (
                  <div
                    key={session._id}
                    className="card bg-base-200 border-2 border-base-300 hover:border-primary/50"
                  >
                    <div className="flex items-center justify-between gap-4 p-5">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="relative size-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                          <Code2Icon className="size-7 text-white" />
                          <div className="absolute -top-1 -right-1 size-4 bg-success rounded-full border-2 border-base-100" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-lg truncate">{session.problem}</h3>
                            <span
                              className={`badge badge-sm ${getDifficultyBadgeClass(
                                session.difficulty
                              )}`}
                            >
                              {session.difficulty.slice(0, 1).toUpperCase() +
                                session.difficulty.slice(1)}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-4 text-sm opacity-80">
                            <div className="flex items-center gap-1.5">
                              <CrownIcon className="size-4" />
                              <span className="font-medium truncate">{session.host?.name}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <UsersIcon className="size-4" />
                              <span className="text-xs">{session.participant ? "2/2" : "1/2"}</span>
                            </div>
                            {isFull ? (
                              <span className="badge badge-error badge-sm">FULL</span>
                            ) : (
                              <span className="badge badge-success badge-sm">OPEN</span>
                            )}
                            {isHost && session.inviteCode && (
                              <button
                                type="button"
                                className="badge badge-outline gap-1 cursor-pointer"
                                onClick={() => copyInviteCode(session.inviteCode)}
                                title="Copy invite code"
                              >
                                <KeyRoundIcon className="size-3" />
                                {session.inviteCode}
                                <CopyIcon className="size-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {isFull ? (
                        <button className="btn btn-disabled btn-sm">Full</button>
                      ) : userInSession ? (
                        <button
                          type="button"
                          onClick={() => navigate(`/session/${session._id}`)}
                          className="btn btn-primary btn-sm gap-2"
                        >
                          Rejoin
                          <ArrowRightIcon className="size-4" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => openJoinModal(session)}
                          className="btn btn-primary btn-sm gap-2"
                        >
                          Enter Code
                          <KeyRoundIcon className="size-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                  <SparklesIcon className="w-10 h-10 text-primary/50" />
                </div>
                <p className="text-lg font-semibold opacity-70 mb-1">No active sessions</p>
                <p className="text-sm opacity-50">Be the first to create one!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {selectedSession && (
        <div className="modal modal-open">
          <div className="modal-box max-w-md">
            <h3 className="font-bold text-xl mb-2">Enter Invite Code</h3>
            <p className="text-sm text-base-content/65 mb-5">
              Enter the code shared by the host to join {selectedSession.problem}.
            </p>
            <form onSubmit={handleJoinWithCode} className="space-y-4">
              <input
                className="input input-bordered w-full uppercase tracking-widest"
                value={inviteCode}
                onChange={(event) => setInviteCode(event.target.value.toUpperCase())}
                placeholder="ABC123"
                maxLength={6}
                autoFocus
              />
              <div className="modal-action">
                <button type="button" className="btn btn-ghost" onClick={closeJoinModal}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary gap-2"
                  disabled={joinSessionMutation.isPending}
                >
                  {joinSessionMutation.isPending ? (
                    <LoaderIcon className="size-4 animate-spin" />
                  ) : (
                    <ArrowRightIcon className="size-4" />
                  )}
                  Join Session
                </button>
              </div>
            </form>
          </div>
          <div className="modal-backdrop" onClick={closeJoinModal}></div>
        </div>
      )}
    </>
  );
}
export default ActiveSessions;
