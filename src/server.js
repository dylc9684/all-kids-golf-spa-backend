import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import kidsRoutes from "./routes/kidsRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/kids", kidsRoutes);
app.use("/booking", bookingRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
