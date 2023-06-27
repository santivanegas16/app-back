/* Middleware needed to verify that the author/publisher is active */
export default (req, res, next) => {
    let author_active = req.author.active
    let company_active = req.company.active
    console.log(req)
    if (author_active || company_active) {
        return next()
    }
    return res.status(403).json({
        success: false,
        message: 'author or company does not active'
    })
}