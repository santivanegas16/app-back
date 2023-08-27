/* Middleware needed to verify that the author/publisher is active */
export default (req, res, next) => {
    let author_active = req.author?.active
    let company_active = req.company?.active

    if (author_active) {
        return next()
    }
    if (company_active) {
        return next()
    }
    return res.status(400).json({
        response: null,
        messages: ['author or company is not active']
    })
}