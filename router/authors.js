import { Router } from "express";
import create from "../controllers/authors/create.js"
import read from "../controllers/authors/read.js";
import read_me from "../controllers/authors/read_me.js";
import validator from "../middlewares/validator.js";
import schema_create from "../schemas/authors/create.js"
import passport from "passport";
import has_permition from "../middlewares/has_permition.js";
import admin from "../controllers/authors/admin.js";
import isAdmin from "../middlewares/isAdmin.js";


let authorsRouter = Router()

/*
Aca se deben configurar las rutas para CRUD de authors
GET
POST
PUT
DELETE
*/

//se modificó luego con los controladores
authorsRouter.get('/', passport.authenticate("jwt",{"session":false}), read)
authorsRouter.post('/', passport.authenticate("jwt",{"session":false}), validator(schema_create), create)
authorsRouter.get('/me',passport.authenticate("jwt",{"session":false}), has_permition, read_me)
authorsRouter.get('/admin',passport.authenticate("jwt",{"session":false}),isAdmin,admin)


export default authorsRouter