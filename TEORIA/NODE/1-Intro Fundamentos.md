<img  src='../logo.png' height='70px'>

# Lección 1: Fundamentos

* ¿Qué es Node.js?
* Instalación
* Primeros pasos
* Exportaciones
* package.json
* NPM (Node Package Manager)
* Servidor HTTP
* ¿Servidor HTTP?
* Verbos o métodos HTTP

Fundamentos
Comenzaremos a crear nuestra primera página web con Node.js

## ¿Qué es Node.js?
https://nodejs.org/es/about/

•	Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación JavaScript.
•	Al contrario que la mayoría del código JavaScript, no se ejecuta en un navegador, sino en el servidor.
•	Está basado en el motor V8 de Google.
•	Permite hacer aplicaciones que se ejecutan en el servidor.
•	Generalmente van a encontrar mucha información sobre node.js vs php (para aplicaciones web)

TIP
V8 es el entorno de ejecución para JavaScript creado para Google Chrome. Es software libre desde 2008, está escrito en C++ y compila el código fuente JavaScript en código de máquina en lugar de interpretarlo en tiempo real.
En este curso nos basaremos en la relación que tiene node.js con el desarrollo web.

## Instalación
•	https://nodejs.org/es/
•	Descargar programa e instalar
•	Ejecutar:
node -v

## Primeros pasos
•	Cree un archivo app.js
```javascript
const frutas = ["banana", "banana", "pera", "banana"];

frutas.forEach((fruta) => {
  console.count(fruta);
});
```
Ejecute en la terminal:
node app

## Exportaciones
https://nodejs.dev/learn/expose-functionality-from-a-nodejs-file-using-exports

Node.js tiene un sistema de módulos incorporado. Un archivo Node.js puede importar la funcionalidad expuesta por otros archivos Node.js.
Cuando quieres importar algo que usas:
```javascript
const frutas = require("./frutas");

frutas.forEach((fruta) => {
  console.count(fruta);
});
en frutas.js
const frutas = ["banana", "banana", "pera", "banana"];
module.exports = frutas;
Múltiples valores
const frutas = ["banana", "banana", "pera", "banana"];
const dinero = 1000;

// Exportamos en un objeto
module.exports = {
  frutas: frutas,
  dinero,
};
// Utilizando destructuring: https://wesbos.com/destructuring-objects
const { frutas, dinero } = require("./frutas");

frutas.forEach((fruta) => {
  console.count(fruta);
});

console.log("mi dinero actual: ", dinero);
```

## package.json
Si ejecutamos:
npm init -y
Se nos creará un archivo el cual tendrá información sobre nuestro proyecto, lo más relevante en estos momentos serán sus dependencias y scripts
Definiciones https://nodejs.dev/learn/the-package-json-guide

Ejemplo de scripts:

```javascript
"scripts": {
  "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
  "start": "npm run dev",
  "unit": "jest --config test/unit/jest.conf.js --coverage",
  "test": "npm run unit",
  "lint": "eslint --ext .js,.vue src test/unit",
  "build": "node build/build.js"
}
```

Estos scripts son aplicaciones de línea de comandos. Puede ejecutarlos llamando npm run XXXX, donde "XXXX" está el nombre del comando. Ejemplo: npm run dev
Puede usar el nombre que desee para un comando y los scripts pueden hacer literalmente cualquier cosa que desee.

```javascript
Dependencias y devDependencies:
"dependencies": {
  "cowsay": "^1.4.0"
},
"devDependencies": {
  "autoprefixer": "^7.1.2",
  "babel-core": "^6.22.1"
}
```
•	Aquí estará la lista de paquetes instalados a través de npm.
•	devDependencies hace referencia a los paquetes que no se necesitan para producción, están destinados a instalarse solo en una máquina de desarrollo, no son necesarios para ejecutar el código en producción.

Versiones de los paquetes: https://nodejs.dev/learn/the-package-json-guide#package-versions
Instalar versiones anteriores: https://nodejs.dev/learn/install-an-older-version-of-an-npm-package

## NPM (Node Package Manager)
https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager npm es el administrador de paquetes estándar para Node.js.

Instalación de un solo paquete:
npm install <package-name>
Actualizando paquetes: npm buscará en todos los paquetes una versión más nueva que satisfaga sus restricciones de versiones.
npm update

<!-- Solo actualizá el paguete indicado -->
npm update <package-name>

¿Dónde instala npm los paquetes?
•	Cuando instala un paquete con npm, puede realizar 2 tipos de instalación:
•	Local: npm install <package-name> (se crea la carpeta node_modules)
•	Global: npm install -g <package-name>

TIP
Generalmente utilizamos global para los CLI, por ejemplo el cli de vue.js, otra opción son para los paquetes frecuentes como nodemon (que veremos a futuro)

Ejemplo de instalación y utilización https://www.npmjs.com/package/cowsay

```javascript
npm i cowsay
var cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "Oo",
    T: "U",
  })
);
```

•	npx: Posiblemente se toparán con este comando a futuro (sobretodo si trabajan con React.js), bueno esto ejecuta un paquete de npm sin necesidad de instalarlo de forma global o local.

Por ejemplo si ejecutamos en la terminal CMD:
npx cowsay "Hola mundo"
npx le permite ejecutar código creado con Node.js y publicado a través del registro npm. Una vez descargado, el código descargado se borrará.

## Servidor HTTP
https://nodejs.dev/learn/build-an-http-server

```javascript
const http = require("http");

const port = 3030;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello, World!</h1>");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
```

## ¿Servidor HTTP?

Hypertext Transfer Protocol: El Protocolo de transferencia de hipertexto es el protocolo de comunicación que permite las transferencias de información en la World Wide Web.

•	Intercambia de información entre cliente y servidor.
•	El servidor queda a la espera de alguna solicitud HTTP ejecutada por el cliente y proporciona una respuesta.

Cuando visitamos un sitio web, hacemos una solicitud GET de HTTP, y el servidor nos devuelve por ejemplo un index.html con el sitio web.
Nosotros configuraremos estas respuestas en nuestro "servidor web o servidor http" con node.js

## Verbos o métodos HTTP
https://developer.mozilla.org/es/docs/Web/HTTP/Methods

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado.
Los más populares son: GET, POST, PUT, DELETE.
En el siguiente apartado crearemos nuestro servidor web y pondremos en práctica cada uno de estos métodos.

