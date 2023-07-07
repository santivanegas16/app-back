import User from "../models/User.js";

export default async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        req.user = { _id: user._id, email: user.email, password: user.password, role: user.role, photo: user.photo };
        return next();
    }
    return res.status(404).json({ response: null, messages: ['user does not exist!'] });
}