import { registerUser, loginUser,logoutUser } from "../service/auth.service.js";
import { setCookie, clearCookie, getCookie } from "../../../helper/cookies.helper.js";

export const registerController = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
    res.status(400).json({ error: error.message });
    }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { accessToken, refreshToken } = await loginUser(email, password);
    setCookie(res, 'accessToken', accessToken, { maxAge: 15 * 60 * 1000 });
    setCookie(res, 'refreshToken', refreshToken, { maxAge: 7 * 24 * 60 * 60 * 1000 });
    res.json({ accessToken });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const logoutController = async (req, res) => {
  try {
    const refreshToken = getCookie(req, 'refreshToken');    
    if (refreshToken) {
      await logoutUser(refreshToken);
      clearCookie(res, 'refreshToken');
    }
    res.json({ message: 'User logged out successfully' });
    } catch (error) {   
    res.status(500).json({ error: 'Internal server error' });
    }
};



