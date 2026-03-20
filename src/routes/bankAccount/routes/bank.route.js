import { createBankAccountController, getBankAccountsController, getBankAccountByIdController, deleteBankAccountController } from "../controller/bankAccount.controller.js";
import { authenticateToken } from "../../../middleware/auth.middleware.js";
import express from "express";

const router = express.Router();

router.post("/", authenticateToken, createBankAccountController);
router.get("/", authenticateToken, getBankAccountsController);
router.get("/:id", authenticateToken, getBankAccountByIdController);
router.delete("/:id", authenticateToken, deleteBankAccountController);

export default router;
