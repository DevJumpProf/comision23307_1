import express from "express"

const app = express()

const port = 8000


app.get ("/",(req,res)=>{
    res.send("estas en el index(respuesta del servidor)")
})

app.listen (port,()=>{
    console.log(`servidor ok en el puerto ${port}`);
})