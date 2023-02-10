<img  src='../logo.png' height='70px'>

# Lección 4: Router

* Rutas


Router
Vamos a establecer un orden con el middleware Router de Express.

## Rutas
https://expressjs.com/es/guide/routing.html
Utilice el middleware express.Router para crear manejadores de rutas montables y modulares.
Creamos una carpeta router
// RutasWeb.js
```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // console.log(__dirname)
    res.render("index", {titulo : "mi titulo dinámico"})
})

router.get('/servicios', (req, res) => {
    res.render("servicios", {tituloServicios: "Este es un mensaje dinámico de servicios"})
})

module.exports = router;

// app.js
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./router/RutasWeb'));

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Título del sitio web"
    })
})

app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port)
})
```
