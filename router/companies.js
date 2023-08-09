import { Router } from "express"
import read from '../controllers/companies/read.js'
import create from '../controllers/companies/create.js'
import validator from "../middlewares/validator.js";
import schema_create from "../schemas/companies/create.js"
import passport from "passport";
import admin from "../controllers/companies/admin.js";
import isAdmin from "../middlewares/isAdmin.js";

let companiesRouter = Router()

companiesRouter.get('/',
    passport.authenticate("jwt",{"session":false}),
    read
)
companiesRouter.post('/',
    passport.authenticate("jwt",{"session":false}),
    validator(schema_create),
    create
)
companiesRouter.get('/admin',passport.authenticate("jwt",{"session":false}),isAdmin,admin)

export default companiesRouter
