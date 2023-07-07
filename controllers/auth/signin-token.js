import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        return res.status(200).json({ response: { token: req.token, user: req.user }, success: true, message: 'User sigin with token' });
    } catch (error) {
        return next();
    }
}