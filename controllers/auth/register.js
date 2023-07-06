import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        return res.status(201).json({ response: 'Id: ' + newUser._id, message: 'User Created' });
    } catch (error) {
        return next();
    }
}