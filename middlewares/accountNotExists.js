import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        const one = await User.findOne({ email: req.body.email });
        if (one) {
            req.user = { _id: one._id, email: one.email, password: one.password, role: one.role, photo: one.photo };
            return next();
        }
        return res.status(404).json({ success: false, message: 'user does not exist!' });
    } catch (error) {
        return next(error);
    }
}