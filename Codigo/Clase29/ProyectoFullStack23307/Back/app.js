import express from "express"
import cors from "cors"
import db from "./database/db.js"
import postRouter from "./routes/postRouter.js"

const app = express()

const port = 8000


app.use(cors())
app.use(express.json())

app.use("/post",postRouter)



//cheque conexion a base de datos
// realizar correctamente la funcion asincrona para conectarme a la db
const conexionDb = async()=>{
    try {
        await db.authenticate()
        console.log(`servidor ok en el puerto ${port}`)
        console.log("conectado a db OK");
    } catch (error) {
        console.log(`Error en conexion ${error}`);
    }
}


app.listen (port,()=>{
    conexionDb()
    console.log(`servidor ok en el puerto ${port}`);
})