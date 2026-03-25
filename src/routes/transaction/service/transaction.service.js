import prisma from "../../../config/prisma.js";


export const sendMoney = async (senderUserId, receiverUpiId, amount) => {
  if (amount <= 0) {
    throw new Error("Amount must be greater than 0");
  }

  const senderAccount = await prisma.bankAccount.findFirst({
    where: { userId: senderUserId },
  });

  if (!senderAccount) {
    throw new Error("Sender account not found");
  }

  const receiverAccount = await prisma.bankAccount.findUnique({
    where: { upiId: receiverUpiId },
  });

  if (!receiverAccount) {
    throw new Error("Receiver account not found");
  }

  if (senderAccount.id === receiverAccount.id) {
    throw new Error("Cannot send money to your own account");
  }
  if (senderAccount.balance < amount) {
    throw new Error("Insufficient balance");
  }

  const result = await prisma.$transaction(async (tx) => {
    await tx.bankAccount.update({
      where: { id: senderAccount.id },
      data: {
        balance: {
          decrement: amount,
        },
      },
    });

    await tx.bankAccount.update({
      where: { id: receiverAccount.id },
      data: {
        balance: {
          increment: amount,
        },
      },
    });

    const transaction = await tx.transaction.create({
      data: {
        senderId: senderAccount.id,
        receiverId: receiverAccount.id,
        amount,
        status: "SUCCESS",
      },
    });

    return transaction;
  });

  return result;
};


export const getTransactionById = async (transactionId) => {
  const transaction = await prisma.transaction.findUnique({
    where: { id: transactionId },
    include: {
      sender: true,
      receiver: true,
    },
  });

  if (!transaction) {
    throw new Error("Transaction not found");
  }

  return transaction;
};


export const getUserTransactions = async (userId) => {
  const transactions = await prisma.transaction.findMany({
    where: {
      OR: [
        { sender: { userId } },
        { receiver: { userId } },
      ],
    },
    include: {
      sender: true,
      receiver: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return transactions;
};