import mongoose, { Schema, model } from "mongoose";

const Notes = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required:true
    },
  },
  {
    timestamps: true,
  }
);

export default model("notes", Notes);
