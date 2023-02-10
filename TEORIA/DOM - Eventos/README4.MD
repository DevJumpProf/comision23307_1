<img  src='../logo.png' height='70px'>

# DOM   

* Atributos y Propiedades

## Atributos y Propiedades

Los atributos de HTML son palabras especiales utilizadas dentro de la etiqueta de apertura, para controlar el comportamiento del elemento. Los atributos de HTML son un modificador de un tipo de elemento de HTML

Atributo vs Propiedad
<input type=“text” value=“Ejemplo” >
type y value son atributos, lo que le sigue después del = son sus propiedades
"text" es la propiedad del atributo type
"Ejemplo" es la propiedad del atributo value

Propiedad del DOM sera inicializada por los atributos del HTML para posteriormente modificarlas

El 80% del tiempo que estemos manipulando el DOM, lo que haremos sera cambiando dinámicamente con JS las propiedades de un elemento
Podemos acceder y modificar las propiedades mediante las propiedades del elemento deseado

Atributo
Definidas por el HTML  (Ej: type, class, id, type…)
Constantes
Solo se usan para iniciar el HTML y las propiedades del DOM

Propiedad
Son lo que irán cambiando en JS
Definidas por el DOM
Valor de una propiedad es variable

RESUMEN: Las propiedades de los elementos serán aquellas que mayormente se modificarán. La diferencia entre un atributo y una propiedad es que el atributo es para iniciar el HTML y DOM, son constantes mientras que las propiedades vienen del DOM y se pueden ir cambiando

Básicamente un atributo es el estado inicial en nuestro HTML, es HTML solo podemos escribir atributos porque es el estado inicial con el que se renderizan y una propiedad es la variable que podemos cambiar a lo largo de la ejecución del programa mediante JavaScript, es decir, podemos acceder a dichos atributos y cambiarlo, haciendo que sean propiedades

Lo genial de JavaScript es que podemos cambiarlas de forma dinámica. Recordemos que JavaScript son en su mayoría objetos, por lo que los nodos HTML dentro de JavaScript son representados como objetos. Teniendo eso en cuenta, podemos acceder a cualquier atributo de dichos nodos desde HTML y cambiar sus propiedades.

Ejercicio:
Selecciono un input luego en consola escribo $0 para ver propiedades y valores

Diferencia entre Atributo y Propiedad: 
Los atributos son utilizados unicamente al inicio del html, (cambian segun se modifiquen.)

Ejemplo: <input name="keyword" placeholder="Buscar productos" data-suggestion-index="0" autocomplete="off" class="sc-gTgzoy eUIDqI" value>

Son Atributos: 
name, placeholder, data-suggestion-index, autocomplete, class, value.

Son propiedades: lo que se pase en el value : son propiedades.

La propiedades pueden cambien en cualquier momento.


