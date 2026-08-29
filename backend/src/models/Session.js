import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    problem: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    participant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    participantCanEdit: {
      type: Boolean,
      default: false,
    },
    editAccessRequested: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active",
    },
    // stream video call ID
    callId: {
      type: String,
      default: "",
    },
    inviteCode: {
      type: String,
      uppercase: true,
      trim: true,
      index: true,
      default: "",
    },
    currentCode: {
      type: String,
      default: "",
    },
    currentLanguage: {
      type: String,
      default: "javascript",
    },
    codeUpdatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

const Session = mongoose.model("Session", sessionSchema);

export default Session;


