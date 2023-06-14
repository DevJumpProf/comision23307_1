import express from "express"
import cors from "cors"
import db from "./database/db.js"

const app = express()

const port = 8000

app.use(cors())
app.use(express.json())

//cheque conexion a base de datos

try {
    await db.authenticate()
    console.log("conectado a db OK");
} catch (error) {
    console.log(`Error en conexion ${error}`);
}

app.listen (port,()=>{
    console.log(`servidor ok en el puerto ${port}`);
})