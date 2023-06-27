import bcryptjs from 'bcryptjs';

export default (req, res, next) => {
    const hassPassword = bcryptjs.hashSync(req.body.password, 10);          // 10 se refiere al nievel de seguridad
    req.body.password = hassPassword;
    return next();
}