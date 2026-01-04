import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { register, login, users } from "../controllers/authController.js";

const router = Router();
router.post("/register", register);
router.post("/login", login);
router.get("/users", auth, users);

export default router;
