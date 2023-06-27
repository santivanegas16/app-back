import jwt from 'jsonwebtoken';         // npm install jsonwebtoken

export default (req, res, next) => {
                            // objeto a convertir       clave secreta           expiracion del token
    const token = jwt.sign({ email: req.user.email }, process.env.SECRET, { expiresIn: 60 * 60 * 24 * 7 });
    req.token = token;
    return next();
}