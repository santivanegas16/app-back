import { Router } from "express";
import create from "../controllers/reactions/create.js";
import passport from "../middlewares/passport.js";
import read from "../controllers/reactions/read.js";

const reactionsRouter = Router()

reactionsRouter.post('/',  passport.authenticate("jwt",{"session":false}),create)
reactionsRouter.get('/', read)

export default reactionsRouter