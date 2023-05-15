import express from "express";

import "dotenv/config.js";

const server = express(); // Creo servidor

const PORT = process.env.PORT || 8080; // Defino puerto

const ready = () => console.log("ready on: " + PORT); // Callback

server.listen(PORT, ready); //Iniciar servidor

console.log(process.env.NODE_ENV)
