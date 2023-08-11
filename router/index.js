import { Router } from "express";
import authorsRouter from "./authors.js";
import mangasRouter from "./mangas.js";
import chaptersRouter from "./chapters.js";
import authRouter from "./auth.js";
import categoriesRouter from "./categories.js";
import companiesRouter from "./companies.js";
import commentsRouter from "./comments.js";
import reactionsRouter from "./reactions.js";

let indexRouter = Router()

indexRouter.use('/auth',authRouter)
indexRouter.use('/authors',authorsRouter)
indexRouter.use('/mangas',mangasRouter)
indexRouter.use('/chapters',chaptersRouter)
indexRouter.use('/categories',categoriesRouter)
indexRouter.use('/companies', companiesRouter)
indexRouter.use('/comments', commentsRouter)
indexRouter.use('/reactions', reactionsRouter)


export default indexRouter