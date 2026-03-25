import {
  sendMoney,
  getTransactionById,
  getUserTransactions,
} from "../service/transaction.service.js";


export const sendMoneyController = async (req, res) => {
  try {
    const senderUserId = req.user.id; 
    const { receiverUpiId, amount } = req.body;

    if (!receiverUpiId || !amount) {
      return res.status(400).json({
        message: "receiverUpiId and amount are required",
      });
    }

    const transaction = await sendMoney(
      senderUserId,
      receiverUpiId,
      Number(amount)
    );

    return res.status(200).json({
      message: "Money sent successfully",
      data: transaction,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "Failed to send money",
    });
  }
};


export const getTransactionController = async (req, res) => {
  try {
    const { id } = req.params;

    const transaction = await getTransactionById(Number(id));

    return res.status(200).json({
      message: "Transaction fetched successfully",
      data: transaction,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message || "Transaction not found",
    });
  }
};


export const getUserTransactionsController = async (req, res) => {
  try {
    const userId = req.user.id; 

    const transactions = await getUserTransactions(userId);

    return res.status(200).json({
      message: "Transactions fetched successfully",
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "Failed to fetch transactions",
    });
  }
};