import mongoose from "mongoose";

const kidSchema = new mongoose.Schema({
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  age: Number,
  notes: String
});

export default mongoose.model("Kid", kidSchema);
