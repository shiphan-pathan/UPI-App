import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth/routes/auth.route.js';
import bankAccountRoutes from './routes/bankAccount/routes/bank.route.js';
import transactionRoutes from './routes/transaction/routes/transaction.route.js';

import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/auth', authRoutes);
app.use('/api/bank-accounts', bankAccountRoutes);
app.use('/api/transactions', transactionRoutes);

export default app;