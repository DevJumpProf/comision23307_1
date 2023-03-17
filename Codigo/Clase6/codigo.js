// Sentencia While
/* let numero = Number(prompt ("elige numero menor a 10"))

 */
/* while (numero<10){
    numero++; 
    document.write (numero)
}

 */
//sentencia do while


/* do{
    numero ++;
    document.write (numero + "<br>")
}while(numero <10)
 */


//break
/* while (numero<1000){
    numero ++;
    document.write (numero + "<br>");
    if (numero ==500){
        break;
    }
} */

/* bucle for  */
/* declaramos una variable, expresion condicional, incrementamos la variable */
/* for (let i = 0;i<10;i++){
console.log(i) 
} */

//tabla del 2
/* for (i = 0;i<=10;i++){
    console.log(2*i);
} */

//bucle infinito

/* for (let i =0;i>=0;i++){
    console.log(i)
} */


// Arrays -  arreglo - matriz
// Arrays - arreglo - Matriz



// indice             0           1       2      3
let lenguajes = ["Javascript", "Java","Python","Php","GO"]
//                   1           2       3        4

console.log(lenguajes[0]); // accedo a un elemento por su indice
console.log(lenguajes.length);
console.log(lenguajes[lenguajes.length-1]);// cantidad de elementos


/* Metodos de Array */
             //  0       1       2       3      4       5
let animales =["Gato","Perro","Tigre","Rata","Conejo","Gato"];

let numeros = [1,2,8,7,4,6,7,3]

//slice()
/* slice() : Devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificará. */
/* let nuevoArray=animales.slice(2,5) */
/* console.log(nuevoArray); */

//unshift
//Agrega Inicio al final del array
/* animales.unshift("Dragon");
console.log(animales) */

//shift
// elimina elemento al inicio del array
/* animales.shift()
console.log(animales) */


/* .pop()
// elimina elemento al final del array
animales.pop() 
console.log(animales); */

//.push() 
//Agrega elemento/s al final del array
/* animales.push("Cocodrilo") */



// find()
/* .find() : Recorre el array y retorna la primera coincidencia del elemento que se busca.
.find */
/* const nuevoArray = numeros.find(element=> element<3)
console.log(nuevoArray); */

//forEach
/* .forEach() : Permite iterar el contenido de un array. Recibe un callback que toma como parámetro el elemento actual de la iteración y el indice del mismo.
forEach */
/* animales.forEach((element,i)=>{
    console.log(`el ${element} está en la posicion ${i}`);
}) */

//filter()
/* .filter() : Recorre el array y retorna un nuevo array con aquellos elementos que pasen una determinada condición
.filter */
/* 
let nuevoArray=animales.filter (elements=>elements==="Perro"||elements==="Gato")
console.log(nuevoArray) */

//.map()
/* .map() : Permite recorre el array y modificar los elements presentes en él, retornando un nuevo array con la misma longitud que el original.
.map */
/* let nuevoArray = numeros.map(elements =>elements *10)
console.log(nuevoArray); */


