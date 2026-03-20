import prisma from "../../../config/prisma.js";

export const createBankAccount = async (userId, accountData) => {
    const {  bankName, accountNumber, upiId, balance } = accountData;
    const newBankAccount = await prisma.bankAccount.create({
        data: {
            bankName,
            accountNumber,
            upiId,
            balance,
            user : { connect: { id: userId } },
        },
    });
    return newBankAccount;
};

export const getBankAccounts = async (userId) => {
    return await prisma.bankAccount.findMany({ where: { userId } });
};

export const getBankAccountById = async (accountId) => {
    return await prisma.bankAccount.findUnique({ where: { id: accountId } });
};

export const updateBankAccount = async (accountId, accountData) => {
    const {  bankName, accountNumber, upiId, balance } = accountData;
    return await prisma.bankAccount.update({
        where: { id: accountId },
        data: {
            bankName,
            accountNumber,
            upiId,
            balance,
        },
    });
};

export const deleteBankAccount = async (accountId) => {
    await prisma.bankAccount.delete({ where: { id: accountId } });
    return true;
};


