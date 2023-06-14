import {Sequelize} from "sequelize"
// nombre de la base de datos - user - contraseña - (donde esta alojada mi db, lenguaje de db, puerto)
const db = new Sequelize ("socialmedia23307","root","",{
    host:"localhost",
    dialect:"mysql",
    port:3306
})

export default db