import { createBankAccount, getBankAccounts, getBankAccountById,  updateBankAccount, deleteBankAccount } from "../service/bankAccount.service.js";

export const createBankAccountController = async (req, res) => {
    try {
        const userId = req.user.id;
        const newBankAccount = await createBankAccount(userId, req.body);
        res.status(201).json(newBankAccount);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getBankAccountsController = async (req, res) => {
    try {
        const userId = req.user.id;
        const bankAccounts = await getBankAccounts(userId);
        res.json(bankAccounts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getBankAccountByIdController = async (req, res) => {
    try {
        const accountId = parseInt(req.params.id);
        const bankAccount = await getBankAccountById(accountId, req.user.id);
        if (!bankAccount) {
            return res.status(404).json({ error: 'Bank account not found' });
        }
        res.json(bankAccount);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateBankAccountController = async (req, res) => {
    try {
        const accountId = parseInt(req.params.id);
        const updatedBankAccount = await updateBankAccount(accountId, req.body);
        res.json(updatedBankAccount);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteBankAccountController = async (req, res) => {
    try {
        const accountId = parseInt(req.params.id);
        await deleteBankAccount(accountId);
        res.json({ message: 'Bank account deleted successfully' });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};




