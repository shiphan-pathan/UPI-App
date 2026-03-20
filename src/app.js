import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth/routes/auth.route.js';
import bankAccountRoutes from './routes/bankAccount/routes/bank.route.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/bank-accounts', bankAccountRoutes);

export default app;