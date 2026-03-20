import prisma from "../../../config/prisma.js";
import { hashPassword, comparePassword } from "../../../helper/password.helper.js";
import { generateAccessToken, generateRefreshToken } from "../../../helper/token.helper.js";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error('User already exists');
    }
    const hashedPassword = await hashPassword(password);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    return newUser;
};

export const loginUser = async (email, password) => {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        throw new Error('Invalid email or password');
    }
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Invalid email or password');
    }
    const accessToken = generateAccessToken({ id: user.id });
    const refreshToken = generateRefreshToken({ id: user.id });
    return { accessToken, refreshToken };
};

export const logoutUser = async (refreshToken) => {
    const user = await prisma.user.findFirst({ where: { refreshToken } });
    if (user) {
        await prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: null },
        });
    }
    return true;
};