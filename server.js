import express from "express";
import "dotenv/config.js";
import "./config/database.js"
import indexRouter from "./router/index.js";
import cors from "cors";
import morgan from "morgan"
import not_found_handler from "./middlewares/not_found_handler.js";

const server = express(); // Creo servidor
const PORT = process.env.PORT || 8080; // Defino puerto
const ready = () => console.log("ready on " + PORT); // Callback

//middlewares
server.use(express.json()) //permite entradas y trabajar con formato json
server.use(express.urlencoded({ extended: true })) //permite capturar consultas complejas
server.use(cors()) // permite origenes cruzados front/back
server.use(morgan('dev')) // para registrar peticiones HTTP

//Router
server.use('/api', indexRouter)
server.use(not_found_handler) //para rutas que no existen

//Router + server
server.listen(PORT, ready); //Iniciar servidor


// console.log(process.env.NODE_ENV)
