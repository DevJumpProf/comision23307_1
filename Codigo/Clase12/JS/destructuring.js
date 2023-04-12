// array
let seleccion = ["Messi", "Di Maria","Alvarez"]  
// extraer datos de un array SIN DESTRUCTURACION
/* let leo = seleccion[0] */
/* console.log(leo); */

// extraer datos de un array CON DESTRUCTURACION
let [leo,angel,julian,alexis] = seleccion
/* console.log(leo); */

//objeto 
let auto = {
    marca: "Citroen",
    modelo: "C3",
    anio:2001,
}
// extraer datos de un objeto SIN DESTRUCTURACION
/* let marcaAuto = auto.marca */
/* console.log(marcaAuto); */

// extraer datos de un objeto CON DESTRUCTURACION
let {marca,modelo:miModelo} = auto
console.log(auto);

/* miModelo = "C4"   // cambio el valor a la variable
console.log(miModelo) */


//----------------------- spread operator

//array
let frutas = ["Tomate","Kiwi","Manzana"]
let verduras = ["Lechuga","cebolla","Coliflor"]

let frutaYverdura = ["pera",...verduras,...frutas]

console.log(frutaYverdura );


//objeto
let generoAccion= {
    genero: "Accion",
    rating: 10
}

let matrix = {
    titulo : "Matrix",
    duracion:120,
    ...generoAccion
}

console.log(matrix);


