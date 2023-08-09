import { Router } from "express";

// Controllers
import read from "../controllers/auth/read.js";
import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";
import signout from "../controllers/auth/signout.js";
import token from "../controllers/auth/signin-token.js";

// Middlewares
import accountNotExists from "../middlewares/accountNotExists.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import update_role_1 from "../controllers/auth/update_role_1.js";
import update_role_2 from "../controllers/auth/update_role_2.js";
import isAdmin from "../middlewares/isAdmin.js"

// Schemas
import signin_schema from "../schemas/auth/signin.js";
import register_schema from "../schemas/auth/register.js";

let authRouter = Router();

authRouter.post('/signin', validator(signin_schema), accountNotExists, isValidPassword, generateToken, signin);
authRouter.post('/token', passport.authenticate('jwt', { session: false }), generateToken, token);
authRouter.post('/register', validator(register_schema), accountExists, createHash, register);
authRouter.post('/signout', passport.authenticate('jwt', { session: false }), signout);
authRouter.put('/role/author/:id',passport.authenticate('jwt', { session: false }),isAdmin,update_role_1)
authRouter.put('/role/company/:id',passport.authenticate('jwt', { session: false }),isAdmin,update_role_2)
authRouter.get('/', read);


export default authRouter;