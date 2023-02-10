<img  src='../logo.png' height='70px'>

# DOM   

* TIMERS
* EVENTOS DE FORMULARIOS
* VALIDACIONES



## TIMERS
setTimeout
Se utiliza cuando queremos que nuestro código se ejecute una
sola vez, pasado un tiempo determinado.

const delay = 3000;
 setTimeout(miFuncion,delay);
 function miFuncion(){
 alert("¡Este es mi anuncio!")
 }

 Nota
miFuncion, es aquella función la cual voy a ejecutar por
callback cuando se cumpla el tiempo determinado por delay
(en milisegundos, en el ejemplo serían: 3 segundos).

setInterval
Se utiliza cuando queremos que nuestro código se ejecute una y
otra vez, pasado un tiempo determinado.

const delay = 3000;
 setInterval(miFuncion,delay);
 function miFuncion(){
 alert("¡Este es mi anuncio repetido :) !")
 }

 miFuncion, es aquella función la cual voy a ejecutar por
callback cuando se cumpla el tiempo determinado por delay
(en milisegundos, en el ejemplo serían: 3 segundos).

clearTimeout y clearInterval
Ahora bien… ¿Puedo detener la ejecución de un timer cuando
desee?
¡Obviamente! Tanto setTimeout como setInterval, pueden
detenerse. Veamos el siguiente ejemplo con clearInterval:

const delay = 3000;
 const miIntervalo = setInterval(miFuncion,delay);
 function miFuncion(){
 alert("¡Este es mi anuncio repetido :) !")
 }
clearInterval(miIntervalo);

## EVENTOS DE FORMULARIOS

onfocus
El evento “focus” sucede cuando el usuario ingresa con
el cursor dentro de un campo input.

let miInput = document.querySelector('#miInput');
 miInput.onfocus = function(){
 alert('Ingresaste el cursor al campo :)');
 }

onblur
Por el contrarios el evento “blur” sucede cuando el cursor
abandona el campo en donde se encuentra.

let miInput = document.querySelector('#miInput');
 miInput.onblur = function(){
 alert('Saliste del campo :)');
 }

 onchange
El evento “change” permite identificar que el valor de un
campo cambió. La ventaja que presenta el evento
“change” es que podemos aplicarlo sobre cualquiera de
los campos del formulario, inclusive sobre el formulario
completo.

let miInput = document.querySelector('#miInput');
 miInput.onchange = function(){
 alert('Hubo un cambio por aquí...');
 }

 onsubmit
El evento “submit” identifica el momento en que se
clickea sobre un botón o un campo input, ambos de tipo
“submit”.

let miForm = document.querySelector('#miForm);
 miForm.onsubmit = function(){
 alert('El formulario se está por enviar...');
 }

 onsubmit y preventDefault()

 Para evitar el envío de un formulario, necesitamos incluir
a la función preventDefault en la primer línea dentro de
la función.

let miForm = document.querySelector('#miForm);
 miForm.onsubmit = function(event){
if( algunCampoEnBlanco ) {
event.preventDefault();
 alert('El formulario no se envió...');
}else{
 alert('El formulario se está por enviar...');
}
 }
 
## VALIDACIONES
Obtener el formulario
El primer objetivo, será obtener el formulario y luego
agregar un comportamiento cuando queramos capturar
el evento.

window.addEventListener("load", function(){
 let formulario = document.querySelector("form.reservation")
//Agregamos el evento para atraparlo
 formulario.addEventListener("submit", function(event){
 //Form recien atrapado :)
 });
});

Validando un campo vacío
Primero y principal, dentro del evento, detendremos el
envío de formulario con event.preventDefault() .
Luego, obtendremos nuestro input con querySelector
para que finalmente preguntemos si el campo está
vacío.

event.preventDefault();
let campoNombre = document.querySelector("input.nombre");
if(campoNombre.value == ""){
alert("El campo nombre no debe estar vacío");
}

Array de errores
Nuestro siguiente paso es crear un array para acumular
estos errores y cambiar nuestra lógica, es decir, si el
array no está vacío, entonces prevengo el envío de
formulario, caso contrario, el formulario se enviará.

let errores = [];
let campoNombre = document.querySelector("input.nombre");
if(campoNombre.value == ""){
errores.push("El campo nombre está vacío");
}
if(errores.length > 0){
event.preventDefault();
}

Mostrando errores en HTML
Nuestro siguiente paso es crear una etiqueta <div>
dentro de nuestro html donde mostraremos el listado de
errores. Para ello, la colocaremos por arriba de nuestro
formulario sumándole una etiqueta <ul> para indicar el
inicio de un listado.

<div class="errores">
 <ul>
 <!--Aca irán los errores-->
 </ul>
 </div>

 Mostrando errores con Javascript
Por último, en nuestro archivo JavaScript, recorreremos
con un for, el array de errores para que sean mostrados
dentro del <div> <ul>.

let ulErrores = document.querySelector("div.errores ul");
for (let i = 0; i < errores.length; i++) {
 ulErrores.innerHTML += "<li>" +errores[i]+"</li>";
}

