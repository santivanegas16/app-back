import { Router } from "express";
import create from "../controllers/comments/create.js";
import all_from_chapter from "../controllers/comments/all_from_chapter.js";       
import update from "../controllers/comments/update.js"; 
import destroy from "../controllers/comments/destroy.js"; 
import passport from "../middlewares/passport.js";
import user_online from "../middlewares/user_online.js";
import is_message_of from "../middlewares/is_message_of.js";

let commentsRouter = Router()

commentsRouter.post('/',passport.authenticate('jwt', { session: false }), user_online, create)
commentsRouter.get('/',passport.authenticate('jwt', { session: false }), all_from_chapter)
commentsRouter.put('/:id',passport.authenticate('jwt', { session: false }), is_message_of, update )
commentsRouter.delete('/:id',passport.authenticate('jwt', { session: false }), is_message_of, destroy)

export default commentsRouter