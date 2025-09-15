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
    },
    tenant: {
      type:String,
      required:true
    },
    admin:{
      type:Boolean,
      default:false
    },
    slug:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

export default model("user", User);
