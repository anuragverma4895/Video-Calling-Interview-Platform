import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env"), quiet: true });

export const ENV = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
  CLIENT_URL: process.env.CLIENT_URL,
  ADMIN_EMAILS: process.env.ADMIN_EMAILS,
  ADMIN_CLERK_IDS: process.env.ADMIN_CLERK_IDS,
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY,
  STREAM_API_KEY: process.env.STREAM_API_KEY,
  STREAM_API_SECRET: process.env.STREAM_API_SECRET,
  JUDGE0_API_URL: process.env.JUDGE0_API_URL,
  JUDGE0_API_KEY: process.env.JUDGE0_API_KEY,
  JUDGE0_API_HOST: process.env.JUDGE0_API_HOST,
  JUDGE0_API_TIMEOUT_MS: process.env.JUDGE0_API_TIMEOUT_MS,
  JUDGE0_POLL_INTERVAL_MS: process.env.JUDGE0_POLL_INTERVAL_MS,
  JUDGE0_MAX_POLL_ATTEMPTS: process.env.JUDGE0_MAX_POLL_ATTEMPTS,
};
