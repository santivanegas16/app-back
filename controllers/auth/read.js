import User from '../../models/User.js'

export default async (req, res) => {
    try {
        const one = await User.findOne({ email: req.body.email, password: req.body.password });
        if (one) {
            return res.status(200).json({ success: true, message: 'users', response: one });
        } else {
            return res.status(404).json({ success: false, message: 'users not found' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'error' });
    }
}