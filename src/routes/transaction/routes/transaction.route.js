import { sendMoneyController, getTransactionController, getUserTransactionsController } from "../controller/transaction.controller.js";
import { authenticateToken } from "../../../middleware/auth.middleware.js";
import express from "express";

const router = express.Router();

router.post("/send", authenticateToken, sendMoneyController);
router.get("/:id", authenticateToken, getTransactionController);
router.get("/history", authenticateToken, getUserTransactionsController);

export default router;