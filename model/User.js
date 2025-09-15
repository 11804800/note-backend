import mongoose, { model, Schema } from "mongoose";

const User = new Schema(
  {
    firstname: {
      type: String,
    },
    lastname: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    plan: {
      type: String,
      default: "free",
      ref: "plan",
    },
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tenants",
    },
  },
  {
    timestamps: true,
  }
);

export default model("user", User);
