<img  src='../logo.png' height='70px'>

# DOM   

* Ejercicio 1
* Diferencias entre **getElement **y **querySelector**
* Ejercicio 2
* NodeLists
* Ejercicio 3
* NodeLists vs Array
* 2 formas de transformar un NodeList en un array

## Ejercicio 1

a) ingresá
https://getbootstrap.com/docs/4.5/examples/checkout/

b)Inspeccionar y buscar el input con el ID : first-Name

c)En la consola del Navegador escribir :
document.getElementById("firstName") 
¿Que Pasa?
Devuelve solo un dato porque el id es único 

d)En la consola del Navegador escribir :
document.getElementsByTagName("input")
¿Que Pasa?
Devuelve 1 o más porque hay varias etiquetas iguales

## 	Diferencias entre **getElement **y **querySelector**
Para poder leer nodos tenemos diferentes métodos brindados por el navegador, entre los mas destacados estan los de querySelector y querySelectorAll que nos permiten especificar lo que deseamos traer mediante una cadena de texto. Ademas que si nos devuelven una lista esta sera una nodeList

getElementById() tienes que hacer referencia a un elemento que tenga un id único.

querySelector() te devolverá el **primer elemento** que cumpla la condición que especifiques.

En la mayoria de los casos querySelector y querySelectorAll
Nos van a dar mayor beneficios al manipular el DOM

**querySelector**
Acepta cualquier tipo de selector que tenga sentido con CSS

## Ejercicio 2
a) ingresá
https://getbootstrap.com/docs/4.5/examples/checkout/

b) En la consola del Navegador escribir :
document.querySelector("#address")
¿Que pasa?
Devuelve el input con ese ID

c)En la consola del Navegador escribir :
document.querySelector("input")
¿Que pasa?
Devolverá solo el primero de todos los input´s.

d)En la consola del Navegador escribir :
document.querySelector(".form-control")
¿Que pasa?
Devuelve el primer elemento que tenga la clase form-control.

e) realizá los pasos anteriores utilizando document.querySelectorAll()

## NodeLists

Un NodeList puede parecer mucho a un Array, pero la realidad es que son dos estructuras completamente distintas. Por un lado NodeList es una colección de nodos del DOM, extraidos del HTML y un Array es un tipo de dato especial en Javascript, donde podemos almacenar cualquier tipo de dato. Ambos tienen similitudes, como acceder a la longitud, a traves de length, acceder a los elementos a traves de su indice usando [indice]. Ahora, hay que aclara que en un NodeList no tenemos disponibles los principales metodos de Array que nos facilitan la vida, como map(), filter(), reduce(), some(). Un dato curioso y super interesante del NodeList es que es una especie de coleccion en vivo, ¿y que quiere decir esto? Que si se agrega o se elimina algun elemento del DOM los cambios son aplicados inmediatamente y de forma automatica al NodeList.

Es recomendable transformar los NodeList a Array, pues la mayoria de los motores de Javascript estan optimizados para trabajar con Arrays, en especial el motor V8 de google. 

## Ejercicio 3
a) ingresá
https://getbootstrap.com/docs/4.5/examples/checkout/

b) En la consola del Navegador escribir :
document.querySelectorAll("input")
¿Que pasa?
Nos devuelve un Nodelist con los 17 inputs

c)Guardamos esta expresion (Nodelist) en una variable para analizarla 

const nodeList = document.querySelectorAll("input")

d)Escribir en consola.

nodeList.length
nodeList.forEach
nodeList.map

¿Que pasa?
NodeList carece de operaciones que un array si tiene.

## NodeLists vs Array
La diferencia entre NodeList y Array, es que el NodeList carece de métodos que si están disponibles en los Arrays, pero podemos pasar esto fácilmente usando el operador de propagación.

## 2 formas de transformar un NodeList en un array

// De esta forma pasamos todos los elementos en el NodeList a un arreglo al cual si podremos usar los métodos filter, map, reduce entre otros. 


// Forma 1: Spread Operator

const inputs = document.querySelectorAll("input");
const inputsArray = [...inputs];

// Forma 2:
// Usando la clase Array y su método from

const inputs = document.querySelectorAll("input");
const inputsArray = Array.from(inputs);

Cuando hay objetos dentro de los objetos, Spread no funciona tan bien, por es recomendada esta forma.





