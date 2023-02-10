<img  src='../logo.png' height='70px'>

# Lección 0: Javascript

En esta lección cubriremos:

* ¿Que es un Lenguaje de programación?
* Caracteristicas de Javascript
* Formas de enlazar Javascript
* tipos de convención de nombres


## ¿Que es un Lenguaje de programación?

•	¿Que es un Lenguaje de programación?
Es una herramienta que nos  permite darle instrucciones al navegador a través de código.
Estructurado siguiendo la lógica de programación 


## Caracteristicas de Javascript

•	Interpretado (se ejecuta en el navegador)
Tenemos los lenguajes compilados y los interpretados: Compilados son los que pasan por un compilador y lo convierte a Binario

•	Orientado a Objetos:  en donde sus estructura abarca todos los conceptos ( clases herencias, polimorfismo etc.)

•	Imperativo: todas las introducciones van de línea en línea (Paso a Paso)

•	Case Sensitive (upper and lower case) (Mayusculas y minusculas)

•	Basado en prototipos – instancias – classless :  cuando creamos un objeto lo hacemos basados en un prototipo que ya venia en JS

•	Tipado débil: el valor de las variables pueden cambiar a lo largo del tiempo.(una variable puede pasar de  un numero o un texto)

•	Lenguaje dinámico: El dato se ajusta a la variable (en otros lenguajes tenemos que avisar antes que tipo de dato es) 

## Formas de enlazar JavaScript

En Linea : 
 <h1 onclick= "alert ('hola')">Hola</h1>

Como contenido en la etiqueta <script> : 
<script type="text/javascript">alert('hola')</script>

Como contenido en un archivo en formato .js (en el body):  
   <script src="codigo.js"></script>

•	Con un require (Node,js)


## tipos de convención de nombres

desde las más clásicas hasta las mas curiosas. Cada lenguaje de programación tiene su propia convención en como debemos de nombrar nuestras variables, métodos, clases y otros elementos de nuestro código fuente. Esta convención de nombres forma parte de las convenciones y guías de estilos de cada lenguaje.

Las convenciones de codificación son un conjunto de normas para un lenguaje de programación específico que recomiendan estilos de programación, buenas prácticas y métodos para mantener el aspecto del código fuente.. Estas convenciones incluyen la organización de archivos, la indentación, los comentarios, las declaraciones los espacio en blanco, las llaves de apertura y cerrado…

Se recomienda a los desarrolladores de software que sigan estas convenciones para ayudar a mejorar la legibilidad del código fuente y facilitar el mantenimiento del software. Las razones principales de la existencia de estas convenciones son para reducir los esfuerzos a la hora de leer y entender el código fuente y  mantener  el standard de estilo adecuado al lenguaje de programación, de esta manera nos centramos en revisar los puntos mas importantes de nuestro código fuente más que en sintaxis y estilos. Por ejemplo, en PHP se han definido unos standard llamados PSR (PSR-1 y PSR-2), pero cada ecosistema de lenguajes utiliza su propia nomenclatura como si de un dogma se tratara.

Volviendo a la convención de nombres, por ejemplo en PHP, las variables deben de definirse en CamelCase y las contantes en UPPERCASE. Para que te sean conocidas y no te suenan a chino te traigo un recorrido por los distintos tipos de convención de nombres utilizados en distintos lenguajes de programación.

CamelCase
El nombre se debe a que las mayúsculas a lo largo de una palabra en CamelCase se asemejan a las jorobas de un camello.

Existen dos tipos de CamelCase:

UpperCamelCase, cuando la primera letra de cada una de las palabras es mayúscula. Ejemplo: MiBlogDeDesarrollo.
lowerCamelCase, igual que la anterior con la excepción de que la primera letra es minúscula. Ejemplo: miBlogDeDesarrollo.
Esta convención es muy usada, se usa en #hashTags , en nombres de empresa como LaLiga y para variables en muchos lenguajes de programación PHP, Java, C#.

snake_case
Snake case es la convención que compone las palabras separadas por barra baja (underscore) en vez de espacios y con la primera letra de cada palabra en minúscula. Por ejemplo mi_blog_de_desarrollo.

Este tipo de convención se utiliza en nombres de variables y funciones de lenguajes antiguo particularmente asociado con C. Aunque también lenguajes como Ruby y Python lo han adoptado. Igual que el CamelCase existen variedades, por ejemplo todas las letras en mayusculas de denomina SCREAMING_SNAKE_CASE utilizado para definir constantes.

kebab-case
Al igual que el snake_case pero unido con guiones en vez de barra baja. Por ejemplo mi-blog-de-desarrollo

Este tipo de sintaxis se utiliza para las urls, nombres de paquetes en Composer y también se utiliza como convención de nombres en Lisp. Por ello también es conocido por spinal-case o lisp-case

Train-Case
Es una variedad del kebab-case, pero cada palabra con la primera letra en mayúsculas. Por ejemplo, Mi-Blog-De-Desarrollo.

l33t
Leet (o “1337”), también conocido como eleet o leetspeak, es una nomenclatura usada por algunas comunidades y usuarios de diferentes medios de internet.. Utiliza algunos caracteres para reemplazar a otros en formas que juegan en la similitud a través de la reflexión u otra semejanza. Por ejemplo, las ortografías de leet de la palabra leet incluyen 1337 y l33t, o con el ejemplo que he estado usando M1BL0gD3S4R0110

Es altamente utilizado en internet en términos como n00b, l0l,C@7L0vr, 0wn3d, r00t. Google tiene una versión de su buscador en honor a esta nomenclatura.

Notación Húngara
En el mundo del desarrollo del software la notación húngara es un sistema usado normalmente para crear los nombres de variables. También se utiliza para nombrar las instancias de objetos en lenguajes de programación visuales, como por ejemplo Delphi.

La notación consiste en añadir prefijos en minúsculas que se añaden a los nombres de las variables y que indican su tipo, altamente utilizado en lenguajes no tipados. El resto del nombre indica, lo más claramente posible, la función que realiza la variable. Por ejemplo nContador o bActivado.

Conclusión
A parte de conocer estas nomenclaturas, existen librerías que facilitan la conversión de los strings a los distintos tipos de nomenclaturas. Una de ellas es ChangeCase que lo podéis encontrar en NPM, Camel-snake-kebab un script de Clojure, o Neko en PHP.
