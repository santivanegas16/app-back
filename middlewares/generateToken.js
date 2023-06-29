import jwt from 'jsonwebtoken';         // npm install jsonwebtoken

export default (req, res, next) => {// objeto a convertir  clave secreta    expiracion del token
    req.token = jwt.sign({ _id: req.user._id }, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 7 });
    return next();
}