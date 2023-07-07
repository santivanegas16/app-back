import Author from '../models/Author.js'
import Company from '../models/Company.js'

//se utiliza para verificar si el usuario es autor o empresa para poder crear, actualizar o eliminar un manga o capitulo.
export default async (req, res, next) => {

    let user_role = req.user.role

    if (user_role === 1 || user_role === 2) {
        let author = await Author.findOne({ user_id: req.user._id })
        if (author) {
            req.body.author_id = author._id
            req.author=author
            return next()
        }
        let company = await Company.findOne({ user_id: req.user._id })
        if (company) {
            req.body.company_id = company._id
            req.company=company
            return next()
        }
    }
    return res.status(400).json({
        success: false,
        response: null,
        messages: ['not allow']
    })
}