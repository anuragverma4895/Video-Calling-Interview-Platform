import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;
const hasStreamCredentials = Boolean(apiKey && apiSecret);

if (!hasStreamCredentials) {
  console.warn(
    "STREAM_API_KEY or STREAM_API_SECRET is missing. Video and chat features are disabled until these are configured."
  );
}

export const chatClient = hasStreamCredentials ? StreamChat.getInstance(apiKey, apiSecret) : null;
export const streamClient = hasStreamCredentials ? new StreamClient(apiKey, apiSecret) : null;

export const isStreamConfigured = () => hasStreamCredentials;

export const upsertStreamUser = async (userData) => {
  if (!chatClient) {
    return;
  }

  try {
    await chatClient.upsertUser(userData);
    console.log("Stream user upserted successfully:", userData);
  } catch (error) {
    console.error("Error upserting Stream user:", error);
  }
};

export const deleteStreamUser = async (userId) => {
  if (!chatClient) {
    return;
  }

  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting the Stream user:", error);
  }
};
