/* PASAR A FUNCION FLECHA
PASAR A IF TERNARIO
UTILIZAR PLANTILLAS LITERALES TEMPLATE LITERALS `` (BACKSTICKS) O ACENTUACION GRAVE
 */

/* 
EJERCICIO EXTRA : RECOMENDAMOS PELICULA - SERIE O LIBRO
UTILIZAMOS SWITCH
 */

// reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "Amilcar";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 35;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

/* function devolverString(str) {
  console.log(str)
}
devolverString("Hola Codo A Codo") */

//funcion flecha
let devolverString2 = str2=>str2;console.log(devolverString2("Hola Codo A Codo"))

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  console.log(x+y);
}
suma(10,10)
/* suma(20,10) */

// funcion flecha
let sumar = (x,y)=>{
return x+y
}; 
console.log( sumar(10,2));

function resta(x, y) {
  // Resta "x" de "y" y devuelve el valor
  // Tu código:
  console.log(x-y);

}
resta(100,20)

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  console.log(x*y)
}
multiplica(8, 2)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  console.log(x/y);
}
divide(21,7)

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:utilizar if y else
/* if (x===y){
  console.log(true);
}else{
  console.log(false);
} */


// solucion sin if/else
return(x===y);  // con return

}
console.log(sonIguales(3,3)); 

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
console.log(str1.length==str2.length);
/* console.log(str1.length==String(str2).length); */
}
tienenMismaLongitud("Hola", "1224")

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
console.log(num<90);
}
menosQueNoventa(8.9)

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
console.log(num>50);
}
mayorQueCincuenta(49)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
console.log(x%y);
}
obtenerResto(22, 7)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
console.log(num%2===0);
  
}
esPar(10)

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log(num%2===1)
  console.log(num%2!==0);
}
esImpar(18) 

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
console.log(Math.pow(num,2));
}
elevarAlCuadrado(8)

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  console.log(Math.pow(num,3));
}
elevarAlCubo(3)

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  console.log(Math.pow(num,exponent));
}
elevar(8, 2)

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
console.log(Math.round(num));
}
redondearNumero(6.3)

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
console.log(Math.ceil(num));
}
redondearHaciaArriba(6.1)

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
/* console.log(Math.trunc(Math.random()*10)) */
console.log(Math.random()) 
}
numeroRandom()


function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
if(numero>0){
console.log("Es positivo");
}else if (numero<0){
  console.log("Negativo");
}else
console.log(false);

// if ternario
/* (numero>0)?console.log("Es positivo"):  console.log("Negativo"); */
/* (numero>0)?console.log("Es positivo"):(numero==0) ? console.log(false):  console.log("Negativo"); */
} 
esPositivo(2) 

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
console.log(str + "!");
}
agregarSimboloExclamacion("Hola Codo a Codo")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Bruce Wayne" -> "Bruce Wayne"
  // Tu código:
console.log(nombre +" " + apellido);
/* Ejemplo backstick
console.log(`soy ${nombre} ${apellido} y me gusta concatenar asi`); */

}
combinarNombres("Gustavo", "Ballas")

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
console.log("Hola " + nombre);
}
obtenerSaludo("Nadia")

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un cuadrado teniendo su altura y ancho
  // Tu código:
console.log(alto*ancho);
}
obtenerAreaRectangulo(4, 2)

function retornarPerimetro(lado){
  //Escribe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
console.log(lado*4);
}
retornarPerimetro(8)

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
console.log((base*altura)/2);

}
areaDelTriangulo(3, 5)

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. 
  //Escribe un programa que pida al usuario un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
console.log("Tu cambio en dolares es: " + euro*1.20 );
}
deEuroAdolar(20)

 function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //si ingresa una consonante muestre en pantalla dato incorrecto
  //Escribe tu código aquí
/* letra = letra.toLowerCase() */
if(letra.length!==1){
  console.log("Dato incorrecto ingresaste mas de una letra");
}else if (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u") {
console.log( "ingresaste la letra "+ letra + " ES VOCAL");
}else{
  console.log( "ingresaste la letra "+ letra + " NO ES VOCAL");
}

}
esVocal("A") 

/* console.log(letra) */



