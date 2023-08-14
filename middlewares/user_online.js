export default (req, res, next) => {

    if (req.user.online) {
        req.body.user_id = req.user._id
        return next() 
    }

    return res.status(400).json({
        response: null,
        messages: ['user does not active']
    })
}