/**
 * @swagger
 * tags:
 *   name: BankAccount
 *   description: Bank Account Management APIs
 */

/**
 * @swagger
 * /api/bank-accounts:
 *   post:
 *     summary: Create a new bank account
 *     tags: [BankAccount]
 *     security:
 *       - cookieAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - accountNumber
 *               - bankName
 *               - balance
 *             properties:
 *               accountNumber:
 *                 type: string
 *                 example: "1234567890"
 *               bankName:
 *                 type: string
 *                 example: "HDFC Bank"
 *               balance:
 *                 type: number
 *                 example: 5000
 *     responses:
 *       201:
 *         description: Bank account created successfully
 *       400:
 *         description: Bad request
 */

/**
 * @swagger
 * /api/bank-accounts:
 *   get:
 *     summary: Get all bank accounts of logged-in user
 *     tags: [BankAccount]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: List of bank accounts
 *       400:
 *         description: Error fetching bank accounts
 */

/**
 * @swagger
 * /api/bank-accounts/{id}:
 *   get:
 *     summary: Get bank account by ID
 *     tags: [BankAccount]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Bank Account ID
 *     responses:
 *       200:
 *         description: Bank account details
 *       404:
 *         description: Bank account not found
 */

/**
 * @swagger
 * /api/bank-accounts/{id}:
 *   delete:
 *     summary: Delete bank account
 *     tags: [BankAccount]
 *     security:
 *       - cookieAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Bank Account ID
 *     responses:
 *       200:
 *         description: Bank account deleted successfully
 *       400:
 *         description: Error deleting bank account
 */

