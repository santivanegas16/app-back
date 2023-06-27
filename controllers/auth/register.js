import User from "../../models/User.js";

export default async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        return res.status(200).json({ success: true, message: 'Created', response: newUser });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Not Created', response: null });
    }
}