import bcryptjs from 'bcryptjs';            // npm i bcryptjs

export default (req, res, next) => {
    const compare = bcryptjs.compareSync(req.body.password, req.user.password);     //compara las contraseñas y devuelte un booleano
    if (compare) {
        delete req.user.password;
        return next();
    }
    return res.status(400).json({ success: false, message: 'Invalid credentials!' }); 
}