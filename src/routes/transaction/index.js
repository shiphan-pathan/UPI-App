/**
 * @swagger
 * tags:
 *   name: Transaction
 *   description: UPI Transaction APIs
 */

/**
 * @swagger
 * /api/transactions/send:
 *   post:
 *     summary: Send money to another user via UPI ID
 *     tags: [Transaction]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - receiverUpiId
 *               - amount
 *             properties:
 *               receiverUpiId:
 *                 type: string
 *                 example: user@upi
 *               amount:
 *                 type: number
 *                 example: 500
 *     responses:
 *       200:
 *         description: Money sent successfully
 *       400:
 *         description: Failed to send money
 */

/**
 * @swagger
 * /api/transactions/{id}:
 *   get:
 *     summary: Get transaction by ID
 *     tags: [Transaction]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Transaction ID
 *     responses:
 *       200:
 *         description: Transaction fetched successfully
 *       404:
 *         description: Transaction not found
 */

/**
 * @swagger
 * /api/transactions/history:
 *   get:
 *     summary: Get all transactions of logged-in user
 *     tags: [Transaction]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Transactions fetched successfully
 *       400:
 *         description: Failed to fetch transactions
 */