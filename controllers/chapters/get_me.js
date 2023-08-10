import Chapter from '../../models/Chapter.js'

export default async ( req, res, next ) => {

    try {
        
        console.log('hola')

    } catch (error) {
        return next(error)
    }

}