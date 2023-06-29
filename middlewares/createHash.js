import bcryptjs from 'bcryptjs';

export default (req, res, next) => {
    req.body.password = bcryptjs.hashSync(req.body.password, 10);   // 10 se refiere al nievel de seguridad
    return next();
}