<img  src='../logo.png' height='70px'>

# Lección 3: Vistas

* Motores de plantilla
* EJS y Express
* Rutas render
* Include
* CSS, JS, img, etc



Vistas
Si bien podríamos trabajar con archivos estáticos HTML, existe una manera más dinámica de crear nuestros sitios web utilizando motores de plantillas.
Entre los más populares (ejs|hbs|hjs|jade|pug|twig|vash)
https://expressjs.com/en/resources/template-engines.html

## Motores de plantilla
https://expressjs.com/es/guide/using-template-engines.html
Vamos a utilizar EJS:
•	No perdemos nuestro html clásico y agregamos lógica con EJS.
•	https://ejs.co/

## EJS y Express

npm i ejs
// Motor de plantilla
```javascript
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
```
Crear carpeta views y un index.ejs

## Rutas render

Para que Express renderice este arhivo y lo combierta en HTML utilizamos:
```javascript
app.get("/", (req, res) => {
  res.render("index", { titulo: "inicio EJS" });
});

app.get("/nosotros", (req, res) => {
  res.render("nosotros", { titulo: "Nosotros EJS" });
});

app.use((req, res, next) => {
  res.status(404).render("404", { titulo: "Página 404" });
});
index.ejs
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <h1>Hola a EJS <%= titulo %></h1>
  </body>
</html>
```

## Include

Estamos repitiendo código HTML por ende podemos optimizarlo con include:
template/cabecera.ejs
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= tituloweb %></title>
</head>

<body>
index.ejs
<%- include('template/cabecera', {tituloweb: 'Inicio EJS'}); %>
<h1>Hola a EJS <%= titulo %></h1>
</body>

</html>

## CSS, JS, img, etc
Como ya tenemos configurada nuestra carpeta public, es ahí donde añadimos los archivos en cuestión.
cabecera.ejs

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><%= tituloweb %></title>
    <link rel="stylesheet" href="/bootstrap.min.css">
</head>

<body class="container">

    <%- include('navbar') %>
navbar.ejs
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">EJS Express</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/nosotros">Nosotros</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/contacto">Contacto</a>
        </li>
        </ul>
    </div>
</nav>
footer.ejs
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="/js/bootstrap.min.js"></script>
</body>
</html>
index.ejs
<%- include('template/cabecera', {tituloweb: 'Inicio EJS'}); %>

<h1>Hola a EJS <%= titulo %></h1>

<%- include('template/footer'); %>

## Despliegue Heroku

Vamos a subir nuestra aplicación a un hosting real, para ello utilizaremos Heroku: https://www.heroku.com/pricing

 Crear cuenta gratis
https://signup.heroku.com/

 Cambiar puerto
https://help.heroku.com/P1AVPANS/why-is-my-node-js-app-crashing-with-an-r10-error

```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
 Agregar Script package.json
"scripts": {
    "start": "node app"
  },
```

#.gitignore
Crear archivo .gitignore
node_modules
#Heroku cli
https://devcenter.heroku.com/articles/heroku-cli
#Heroku GIT
heroku login
git init
heroku git:remote -a nombre-de-su-proyecto
git add .
git commit -am "make it better"
git push heroku master


