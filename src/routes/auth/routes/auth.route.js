import { registerController, loginController, logoutController } from "../controller/auth.controller.js";
import express from "express";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);

export default router;