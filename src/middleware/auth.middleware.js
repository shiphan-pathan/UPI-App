import { verifyAccessToken } from "../helper/token.helper.js";

export const authenticateToken = (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token) {
            return res.status(401).json({ error: 'Access token missing' });
        }

        const user = verifyAccessToken(token);
        if (!user) {
            return res.status(403).json({ error: 'Invalid access token' });
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};





