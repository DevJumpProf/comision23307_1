/* 
let nombre = "Amilcar"

console.log(nombre) */
/* document.write(nombre)  */

//Math
console.log(Math.pow(2, 2));
console.log(Math.pow(3, 2));
console.log(Math.pow(3, 3));

console.log(Math.round(6.99));
console.log(Math.round(2.45));
console.log(Math.round(2.1 + 2.45));

console.log(Math.floor(6.99));

console.log(Math.ceil(6.001));

console.log(Math.random());
console.log(Math.round(Math.random() * 45));

//. length
let nombre = "Juan Perez";
console.log("hola " + nombre + " tenes " + nombre.length + " letras ");

//logicos / relacionales

let num1 = 33;
let num2 = "33";
let num3 = 40;

{
  /* < > <=  >= */
}
console.log(num1 >= num2);

console.log(num1 > 40 && num1 == num2);
//           false    y true
//                 false

console.log(num1 > 40 || num1 == num2);
//           false    y true
//                 false

// condicionales

let edad = 5;

if (edad < 18) {
  console.log("Sos Menor");
} else {
  console.log("Sos Mayor");
}

// if ternario

let pelicula = "otra";

if (pelicula === "Matrix") {
  console.log("Peliculon");
} else {
  console.log("no quiero otra peli");
}

pelicula === "Matrix"
  ? console.log("Peliculon")
  : console.log("no quiero otra peli");

//switch

/* let semaforo = prompt ("ingresa un color del semaforo")

switch (semaforo.toLowerCase()) {
  case "verde":
    alert("Podes Avanzar");
    break;
  case "amarillo":
    alert("Precaucion");
    break;
  case "rojo":
    alert("No podes pasar");
    break;
    default:
        alert("Color incorrecto");
}
 */

// funciones 

//funcion sin argumentos
function saludar() {
    console.log("Hola codo a codo")
}
saludar()


function sumar (num1,num2){
    console.log(num1+num2);
}
sumar (10,12)
sumar (20,12)
sumar (40,12)



