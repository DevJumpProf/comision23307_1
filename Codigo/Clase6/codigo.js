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


//    indice               0          1       2       3       4
/* const lenguajes = ["Javascript", "Java","Python", "PHP"] */
            //        1         2       3       4
/*  console.log(lenguajes[2]); // veo el elemento por el indice
console.log(lenguajes.length); // cantidad de elementos
console.log(lenguajes[lenguajes.length-1]);  *///accedo al ultimo elemento */

/* lenguajes[2] = "GO"; // asignacion
console.log(lenguajes); */
 


// Metodos de arrays
                //0        1        2         3        4        5           6
let animales = ["Perro","Gato","Yaguareté","Yacaré","Surubí","Carpincho","Perro"]

let numeros = [1,2,8,7,4,6,7,3]

let bidimensional = [1,2,3,4,5,6,[7,8]]

let dev = "codo a codo"

//slice()
const nuevoArray= animales.slice(0,3)
console.log(nuevoArray)

/* unshift() */
/* animales.unshift("Cocodrilo")
console.log(animales) */

//shift()
/* animales.shift()
console.log(animales) */

/* .pop()*/
/* animales.pop()
console.log(animales); */

/* .push()  */
/* animales.push("Cocodrilo")
console.log(animales); */

//find()
/* const nuevoArray = numeros.find(element => element>3);
console.log(nuevoArray); */

//forEach()

/* animales.forEach((element,i)=>{
    console.log(`el ${element} se encuentra en el indice ${i}`);
}) */


//.filter
/* const nuevoArray = animales.filter(elements => elements === "Perro" || elements === "Gato" )
console.log(nuevoArray) */

//.map
/* const nuevoArray = numeros.map(elements => elements *10);
console.log(nuevoArray)
 */






