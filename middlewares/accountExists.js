import User from "../models/User.js"

export default async (req, res, next) => {
    try {
        const one = await User.findOne({ email: req.body.email });
        if (one) {
            return res.status(400).json({ success: false, message: 'user already exist!' });
        }
        return next();
    } catch (error) {
        return next(error);
    }
}