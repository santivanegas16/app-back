import { Router } from "express";
import create from "../controllers/comments/create.js";
import all_from_chapter from "../controllers/comments/all_from_chapter.js";       
import passport from "../middlewares/passport.js";

let commentsRouter = Router()

commentsRouter.post('/',passport.authenticate('jwt', { session: false }), create)
commentsRouter.get('/',passport.authenticate('jwt', { session: false }), all_from_chapter)


export default commentsRouter