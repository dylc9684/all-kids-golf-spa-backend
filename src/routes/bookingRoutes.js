import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { createBooking, listBookings } from "../controllers/bookingController.js";

const router = Router();
router.post("/", auth, createBooking);
router.get("/", auth, listBookings);

export default router;
