<img  src='../logo.png' height='70px'>

# DOM   

* Introducción a API’s
* Object Location
* AJAX Fetch
* Local Storage y Session Storage

## Introducción a API’s
APIs Públicas
Las públicas suelen ser APIs que no necesitan
registración, ni ningún tipo de solicitud para usarlas. Un
ejemplo de estos casos es RESTCountries, que nos
devuelve información sobre todos los países del mundo.

APIs Semi-Públicas
Por otro lado tenemos el caso de GIPHY o Marvel que
necesitamos registrarnos en sus páginas para poder
acceder a ellas. Por esto es que las llamamos
semi-públicas.

https://developers.giphy.com/
https://developer.marvel.com/

APIs Privadas
Y por último, existen casos como el de Netflix que usan
APIs internas para poder comunicarse entre diferentes
aplicaciones pero que son privadas. Es decir, los
endpoints no están disponibles para nuestro consumo.

Endpoints
Cuando hablamos de APIs, endpoint hace referencia al
punto de conexión donde necesitamos apuntar para
obtener la información que queremos.
Son las URLs que debemos utilizar para obtener la data
de un servidor a través de una API
● Ministerio de Modernización
https://datos.gob.ar/dataset
● Listado de países
https://restcountries.eu/rest/v2/

## Object Location
“Javascript nos permite acceder a
todos los elementos de nuestra
ventana incluyendo nuestra URL.
Para poder trabajar con ella,
usamos Object Location ".

Location
Acceder a él es tan sencillo como escribir Location en nuestro
archivo Javascript. Con él, vienen una serie de métodos y
atributos muy interesantes.

● Si usamos el atributo href nos devuelve toda la url.
console.log(location.href);

● Si queremos recargar la página, podríamos usar el método
reload.
  location.reload();

  Query String

  Cuando realizamos una petición por GET, comúnmente una
búsqueda, Location nos provee un atributo llamado search,
para obtener el query string entero.

console.log(location.href);

UrlSearchParams

La interfaz URLSearchParams define métodos útiles para
trabajar con los parámetros de búsqueda de una URL.
let query = new URLSearchParams(location.search);

Si queremos preguntar si nuestra Query String tiene cierto
parámetro, usamos el método has
query.has('search_query');

Si queremos saber que valor tiene ese parámetro usamos el
método get.
query.get('search_query');

## AJAX Fetch

fetch()
Fetch recibe como primer parámetro la URL del endpoint al cual
estamos haciendo el llamado asíncrono. Al no saber cuando se
completa la petición, el servidor devuelve una promesa.

fetch("https://restcountries.eu/rest/v2/")

1er then
El primer then será el encargado de recibir un callback y
retornará la respuesta de ese llamado asíncrono en formato
JSON.

fetch("https://restcountries.eu/rest/v2/")
 .then(function(response){
 return response.json();
 })

 2do then
El segundo then será el encargado de recibir un callback el cual
hará lo que le pidamos con la respuesta obtenida en formato
JSON.
fetch("https://restcountries.eu/rest/v2/")
 .then(function(response){
 return response.json();
 })
 .then(function(dataDecode){
 console.log(dataDecode);
 })

 Y si no funciona el servidor?
En el caso de haber algún error, el catch() se encargará de
atraparlo y luego lo imprimirá por consola.

fetch
("https://restcountries.eu/rest/v2/"
)
 .then
(function
(response){
 return response
.json();
 })
 .then
(function
(dataDecode){
 console
.log
(dataDecode);
 })
 .catch
(function
(error){
 console
.log
(error);
 });

 Fetch por POST
Como enviaremos datos por POST, debemos configurar un
objeto literal con los datos necesarios para que la API entienda
nuestra petición, para ello, fetch posee un parámetro opcional.

fetch(url,{
 method: 'POST',
 body: JSON.stringify(data),
 headers: {
 'Content-Type': 'application/json'
 }
 })

## Local Storage y Session Storage
INTRODUCCIÓN
La función de ambos es almacenar datos en el
navegador.
● LocalStorage: permite almacenarlos por tiempo
indeterminado
● SessionStorage: los guarda en sesión. Es decir, si
usamos esta última opción y cerramos el navegador,
perderemos todos los datos.

setItem y getItem
El método setItem nos permite agregar un nuevo atributo a
nuestro sessionStorage, en este caso le pusimos “Tom” al
atributo “miGato”.
Luego, para obtener ese atributo, usaremos el método getItem.

// Almacena la información en sessionStorage
sessionStorage.setItem('miGato', 'Tom');
// Obtiene la información almacenada desde sessionStorage
let data = sessionStorage.getItem(‘miGato’);

removeItem y clearItem
En el caso que queramos borrar un ítem en específico,
podremos usar el método removeItem.
Asi mismo, si queremos borrar todos los ítems, usaremos el
método clear

// Borra el ítem ‘miGato’ en sessionStorage
sessionStorage.removeItem('miGato');
// Borra todos los ítems de sessionStorage
let data = sessionStorage.clear()







