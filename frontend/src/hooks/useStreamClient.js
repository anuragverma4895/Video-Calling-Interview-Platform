import { useState, useEffect, useRef } from "react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { sessionApi } from "../api/sessions";

function useStreamClient(session, loadingSession, isHost, isParticipant) {
  const [streamClient, setStreamClient] = useState(null);
  const [call, setCall] = useState(null);
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  // Use stable primitive values instead of the session object reference
  // to prevent re-initialization on every refetch (every 5 seconds)
  const callId = session?.callId;
  const sessionStatus = session?.status;
  const isInitializedRef = useRef(false);

  useEffect(() => {
    let videoCall = null;
    let chatClientInstance = null;
    let cancelled = false;

    const initCall = async () => {
      if (!callId || sessionStatus === "completed" || (!isHost && !isParticipant)) {
        setIsInitializingCall(false);
        return;
      }

      // Prevent re-initialization if already done for this callId
      if (isInitializedRef.current) return;

      try {
        setIsInitializingCall(true);
        const { token, userId, userName, userImage } = await sessionApi.getStreamToken();

        if (cancelled) return;

        const client = await initializeStreamClient(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );

        if (cancelled) return;

        setStreamClient(client);

        videoCall = client.call("default", callId);
        await videoCall.join({ create: true });

        if (cancelled) return;

        setCall(videoCall);

        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);

        await chatClientInstance.connectUser(
          {
            id: userId,
            name: userName,
            image: userImage,
          },
          token
        );

        if (cancelled) return;

        setChatClient(chatClientInstance);

        const chatChannel = chatClientInstance.channel("messaging", callId);
        await chatChannel.watch();

        if (cancelled) return;

        setChannel(chatChannel);
        isInitializedRef.current = true;
      } catch (error) {
        if (!cancelled) {
          toast.error("Failed to join video call");
          console.error("Error init call", error);
        }
      } finally {
        if (!cancelled) {
          setIsInitializingCall(false);
        }
      }
    };

    if (!loadingSession && callId) initCall();

    // cleanup - only runs on unmount or when callId actually changes
    return () => {
      cancelled = true;

      if (!isInitializedRef.current) return;
      isInitializedRef.current = false;

      (async () => {
        try {
          if (videoCall) await videoCall.leave();
          if (chatClientInstance) await chatClientInstance.disconnectUser();
          await disconnectStreamClient();
        } catch (error) {
          console.error("Cleanup error:", error);
        }
      })();
    };
  }, [callId, sessionStatus, loadingSession, isHost, isParticipant]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;
