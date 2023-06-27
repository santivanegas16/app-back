import express from "express";
import "dotenv/config.js";
import "./config/database.js"
import indexRouter from "./router/index.js";
import cors from "cors";
import morgan from "morgan"

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

//Router + server
server.listen(PORT, ready); //Iniciar servidor


// console.log(process.env.NODE_ENV)
