import { Router } from "express";
import read from "../controllers/auth/read.js";
import register from "../controllers/auth/register.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import signin from "../controllers/auth/signin.js";
import accountNotExists from "../middlewares/accountNotExists.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";

let authRouter = Router();

// authRouter.get('/signin', read);
authRouter.post('/register', accountExists, createHash, register);
authRouter.post('/signin', accountNotExists, isValidPassword, generateToken, signin);

export default authRouter;