// importo las credenciales

import db from "../database/db.js"

// importo DataTypes = configurar los tipos de datos
import { DataTypes } from "sequelize"

const PostModel = db.define("posts",{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING},
})
export default PostModel