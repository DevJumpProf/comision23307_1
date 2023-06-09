/* const express = require ("express") */
import express from "express" // importo express

const app = express() // guardo sus metodos en una variable

const port = 3030 // defino el puerto

app.get("/",(req,res)=>{
    res.send("estas en el index")
})

app.get("/contacto",(req,res)=>{
    res.send("estas en contactos")
})

app.listen (port,()=>{
    console.log(`servidor con express ok en el puerto ${port}`);
})




