import express from "express";
import "dotenv/config.js";
import "./config/database.js"

const server = express(); // Creo servidor
const PORT = process.env.PORT || 8080; // Defino puerto
const ready = () => console.log("ready on: " + PORT); // Callback

//middleware
server.use(express.json()) //permite entradas y trabajar con formato json
server.use(express.urlencoded({ extended: false })) //permite capturar consultas complejas

//Router + server
server.listen(PORT, ready); //Iniciar servidor

console.log(process.env.NODE_ENV)
