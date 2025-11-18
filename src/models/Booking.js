import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  kidId: { type: mongoose.Schema.Types.ObjectId, ref: "Kid" },
  sessionType: { type: String, enum: ["golf", "spa"] },
  date: Date,
  status: { type: String, default: "pending" }
});

export default mongoose.model("Booking", bookingSchema);
