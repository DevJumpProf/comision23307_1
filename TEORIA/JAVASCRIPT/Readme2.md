<img  src='../logo.png' height='70px'>

# Lección 3: Javascript II ( bucles `for`,While - Do while, Método Aleatorio - Math.random)

En esta lección cubriremos:

* Sentencia while 
* Sentencia do while
* Number
* Método Aleatorio - Math.random()
* Bucles `for`


## Sentencia while 
es similar al if, pero sigue preguntando la condición todo el tiempo hasta que la condición sea falsa o demos break
let numero= 0;

while (numero<10){
 numero++;
 document.write(numero)
}

//12345678910


##  Sentencia do while
lo ejecuto y después pregunto
let numero= 0;
do{
    document.write(numero + "<br>");
    numero++;
    }
    while (numero<=6)
    
    ////0123456
Sentencia break
//BREAK

while (numero<1000){
    numero++;
    document.write(numero);
    if (numero==10){
        break;
    }
}
//12345678910

## Number
Number
Number es un objeto primitivo envolvente que permite representar y manipular valores numéricos cómo 37 o -9.25. El constructor Number contiene constantes y métodos para trabajar con números. Valores de otro tipo pueden ser convertidos a números usando la función Number().

Descripción
Los principales usos del objeto Number(valor) son convertir un string u otro valor a uno de tipo numérico; si el argumento no puede ser convertido a un número, devuelve NaN.

Usando Number()
let unNuevoNumero = Number('50');

Usando Number()
Ya vimos cómo declarar una variable y asignarle el tipo de dato que queramos como valor. Ahora, 
veremos 3 variables numéricas pero esta vez haciendo uso de la función nativa Number(). 
Las mismas se llaman positivo, negativo y decimal, y cada una de ellas almacena un número que coincida con su nombre. En la variable positivo almacena un número positivo, y así sucesivamente.

let positivo = Number('10');
let positivo2 = Number('60');
let negativo = Number('-10');
let decimal = Number('0,5')

## Método Aleatorio - Math.random()
Método Aleatorio
El método JavaScript Math.random() es un excelente método integrado para producir números aleatorios. Cuando se ejecuta Math.random(), devuelve un número aleatorio que puede estar entre 0 y 1. Se incluye el 0 y se excluye el 1.

Generando un número de punto flotante aleatorio entre 0 y 1
El método Math.random() devolverá un número de coma flotante mayor o igual que 0 y menor que (pero nunca igual a) 1. En otras palabras, 0 <= x < 1. Por ejemplo:

console.log(Math.random());
// 0.7069207248635578

console.log(Math.random());
// 0.765046694794209

console.log(Math.random());
// 0.14069121642698246
(Por supuesto, los números devueltos serán diferentes cada vez. Esto se asumirá para todos los ejemplos siguientes; se producirán resultados diferentes en cada pasada).

Para obtener un número aleatorio entre un rango mayor, multiplique el resultado de Math.random() por un número.

Generando un número de punto flotante aleatorio entre 0 y un máximo especificado
Por lo general, no necesita números aleatorios entre 0 y 1; necesita números más grandes o incluso enteros.

Por ejemplo, si desea un número de punto flotante aleatorio entre 0 y 10, puede usar:

var x = Math.random()*10;

console.log(x);
// 4.133793901445541
Generando un número de punto flotante aleatorio dentro de un rango
Si necesita un número de punto flotante aleatorio que se encuentre entre dos números específicos, puede hacer algo como esto:

var min = 83.1;
var max = 193.36;

var x = Math.random()*(max - min)+min;

console.log(x);
// 126.94014012699063
Generando un número entero aleatorio entre 0 y un máximo
A menudo necesitas números enteros. Para hacer esto, tendrá que usar algunos otros métodos del objeto Math, Math.floor() (redondea hacia abajo al entero más cercano) y Math.ceil() (redondea hacia arriba al entero más cercano).

Por ejemplo, si necesita seleccionar aleatoriamente de una matriz de 10 elementos, necesitará un número aleatorio entre 0 y 9 inclusive (recuerde que las matrices tienen un índice cero).

var x = Math.floor(Math.random()*10);

console.log(x);
// 7
(Recuerda que Math.random() nunca devolverá exactamente 1, por lo que Math.random()*10 nunca devolverá exactamente 10. Esto significa que después de redondear hacia abajo, el resultado siempre será 9 o menos).

Generando un número entero aleatorio entre 1 y un máximo
Si necesita un número aleatorio con el número mínimo de 1 (por ejemplo, eligiendo un día al azar en enero), puede utilizar el método Math.ceil().

var x = Math.ceil(Math.random()*31);

console.log(x);
// 23
Otra forma habría sido usar la función anterior (usando Math.floor()) y agregarle 1:

var x = Math.floor(Math.random()*31)+1;

console.log(x);
// 17
Generando un número entero aleatorio dentro de un rango
Por último, ocasionalmente necesitas un número entero aleatorio entre dos números enteros específicos. Por ejemplo, si está tratando de elegir boletos de rifa y conoce los números del número más bajo y más grande:

var min = 1718;
var max = 3429;

var x = Math.floor(Math.random()*(max-min+1)+min);

console.log(x);
//2509
¿Qué tan aleatorio es Math.random ()?
Cabe señalar que el número devuelto por Math.random() es un número pseudoaleatorio, ya que ninguna computadora puede generar un número verdaderamente aleatorio, que exhibe aleatoriedad en todas las escalas y en todos los tamaños de conjuntos de datos. Sin embargo, el número pseudoaleatorio generado por Math.random() suele ser suficiente para las necesidades de casi cualquier programa que pueda escribir. La no-verdaderamente-aleatoriedad solo se hace evidente en conjuntos de números astronómicamente grandes o cuando se necesitan decimales excepcionalmente precisos.

## Bucles `for`

La mayoría del software se ejecuta en bucles, evaluando expresiones una y otra vez hasta que devuelve lo que estamos buscando o se detiene después de cierto tiempo. Javascript tiene dos expresiones de bucle incorporadas y hoy veremos la primera, el bucle "for".

Los bucles `for` tienen una sintaxis única, similar a la instrucción` if`, pero un poco más compleja. Primero tenemos la palabra clave `for`, seguida de paréntesis y luego abrir y cerrar llaves. Dentro de los paréntesis necesitaremos tres cosas. Primero, debemos declarar una variable, esto es sobre lo que se repetirá el bucle. Entonces tendremos una expresión condicional, el ciclo continuará sucediendo hasta que esta declaración sea `false`. Tercero, incrementaremos nuestra variable. Las tres declaraciones están separadas por un punto y coma.

```javascript
for (let i = 0                 ; i < 10                 ; i++          ) {
// | Declaramos una variable | Expresión condcicional | Incrementamos la variable |
    console.log(i);
}
```

En este ejemplo, vemos que inicialmente establecemos nuestra variable `i` en 0, el ciclo se ejecutará y cada vez que llegue al final, aumentará el contador en uno. El bucle `for` evaluará la expresión condicional. Si es `true`, se ejecutará nuevamente, si es `false` dejará de funcionar.

### El operador ++

Vimos en el último ejemplo el operador `++`. Esta es la abreviatura de Javascript para "Establecer el valor de la variable a su valor actual más uno". Hay algunas más de estas expresiones abreviadas de matemática / asignación variable, las visitaremos en las próximas lecciones.

### Bucles infinitos

Es posible que un bucle se atasque en lo que llamamos un "bucle infinito". Debes asegurarte de que haya una forma de finalizar el bucle. Ejemplo de un bucle infinito:

```javascript
for (let i = 0; i >= 0; i++) {
    console.log(i);
}
```

Debido a que nuestra expresión condicional SIEMPRE será `true` (` i` nunca será menor que 0), este ciclo se ejecutará esencialmente para siempre. Esto interrumpirá su programa y puede bloquear su navegador web o computadora.


## La mejor herramienta del programador


<br>
<br>
<details>
    <summary>Spoiler, resultado de búsqueda en Google!</summary>
    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch">MDN : Switch</a>
    <br>
    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while">MDN : Do While</a>
</details>
<br>
<br>



## Recursos adicionales

* [MDN: Comparison Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
* [MDN: Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
* [MDN: Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
* [MDN: for Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
