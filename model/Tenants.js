import mongoose, { Schema, model } from "mongoose";

const Tenant = new Schema({
  name: {
    type: String,
    required: true,
  },
});

export default model("tenants", Tenant);
