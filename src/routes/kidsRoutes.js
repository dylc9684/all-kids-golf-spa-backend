import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { addKid, listKids } from "../controllers/kidsController.js";

const router = Router();
router.post("/", auth, addKid);
router.get("/", auth, listKids);

export default router;
