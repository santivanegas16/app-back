import { Router } from "express";
import create from "../controllers/comments/create.js";
import passport from "../middlewares/passport.js";

let commentsRouter = Router()

commentsRouter.post('/',passport.authenticate('jwt', { session: false }), create)

export default commentsRouter