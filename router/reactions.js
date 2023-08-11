import { Router } from "express";
import create from "../controllers/reactions/create.js";
import passport from "../middlewares/passport.js";

const reactionsRouter = Router()

reactionsRouter.post('/',  passport.authenticate("jwt",{"session":false}),create)

export default reactionsRouter