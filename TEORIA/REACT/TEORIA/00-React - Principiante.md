
## React - Principiante

* ¿Qué es React?
* ¿Cuáles son las características principales de React?
* ¿Qué significa exactamente que sea declarativo?
* ¿Qué es un componente?
* ¿Qué es JSX?
* ¿Cómo se transforma el JSX?
* ¿Cuál es la diferencia entre componente y elemento en React?
* ¿Cómo crear un componente en React?
* ¿Qué son las props en React?
* ¿Qué diferencia hay entre props y state?
* ¿Qué es el renderizado condicional en React?
* ¿Cómo puedes aplicar clases CSS a un componente en React?
* ¿Cómo puedes aplicar estilos en línea a un componente en React?
* ¿Cómo puedo aplicar estilos de forma condicional a un componente en React?
* ¿Qué es el renderizado de listas en React?
* ¿Cómo añadir un evento a un componente en React?
* ¿Qué es el estado en React?
* ¿Qué son los hooks?
* ¿Qué hace el hook useState?
* ¿Qué hace el hook useEffect?
* Explica casos de uso del hook useEffect
* Cómo suscribirse a un evento en useEffect
* ¿Cómo podemos ejecutar código cuando el componente se monta?
* ¿Qué son los Fragments en React?
* ¿Cómo puedes inicializar un proyecto de React desde cero?
* ¿Qué es React DOM?


## Principiante

## ¿Qué es React?
React es una biblioteca de JavaScript de código abierto para construir interfaces de usuario. Está basada en la componetización de la UI: la interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.

Esto hace que React sea una herramienta muy útil para construir interfaces complejas, ya que permite dividir la interfaz en piezas más pequeñas y reutilizables.

Fue creada en 2011 por Jordan Walke, un ingeniero de software que trabajaba en Facebook y que quería simplificar la forma de crear interfaces de usuario complejas.

Es una biblioteca muy popular y es usada por muchas empresas como Facebook, Netflix, Airbnb, Twitter, Instagram, etc.

Enlaces de interés:

Curso de React.js
Documentación oficial de React en Español
Introduction to React.js de Facebook (2013)
⬆ Volver a índice

## ¿Cuáles son las características principales de React?
Las características principales de React son:

Componentes: React está basado en la componetización de la UI. La interfaz se divide en componentes independientes, que contienen su propio estado. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz.

Virtual DOM: React usa un DOM virtual para renderizar los componentes. El DOM virtual es una representación en memoria del DOM real. Cuando el estado de un componente cambia, React vuelve a renderizar la interfaz. En lugar de modificar el DOM real, React modifica el DOM virtual y, a continuación, compara el DOM virtual con el DOM real. De esta forma, React sabe qué cambios se deben aplicar al DOM real.

Declarativo: React es declarativo, lo que significa que no se especifica cómo se debe realizar una tarea, sino qué se debe realizar. Esto hace que el código sea más fácil de entender y de mantener.

Unidireccional: React es unidireccional, lo que significa que los datos fluyen en una sola dirección. Los datos fluyen de los componentes padres a los componentes hijos.

Universal: React se puede ejecutar tanto en el cliente como en el servidor. Además, puedes usar React Native para crear aplicaciones nativas para Android e iOS.

⬆ Volver a índice

## ¿Qué significa exactamente que sea declarativo?
No le decimos cómo debe renderizar la interfaz a base de instrucciones. Le decimos qué debe renderizar y React se encarga de renderizarlo.

Un ejemplo entre declarativo e imperativo:

// Declarativo
const element = <h1>Hello, world</h1>

// Imperativo
const element = document.createElement('h1')
element.innerHTML = 'Hello, world'
⬆ Volver a índice

## ¿Qué es un componente?
Un componente es una pieza de código que renderiza una parte de la interfaz. Los componentes pueden ser parametrizados, reutilizados y pueden contener su propio estado.

En React los componentes se crean usando funciones o clases.

⬆ Volver a índice

## ¿Qué es JSX?
React usa JSX para declarar qué debe renderizar. JSX es una extensión de JavaScript que permite escribir un código más cercano visualmente a HTML, que mejora la legibilidad del código y hace que sea más fácil de entender.

Sin JSX, deberíamos usar React.createElement para crear los elementos de la interfaz manualmente de esta forma:

import { createElement } from 'react'

function Hello () { // un componente es una función! 👀
  return React.createElement(
    'h1', // elemento a renderizar
     null, // atributos del elemento
    'Hola Mundo 👋🌍!' // contenido del elemento
  )
}
Esto es muy tedioso y poco legible. Por eso, React usa JSX para declarar qué debe renderizar. Por eso usamos JSX de esta forma:

function Hello () {
  return <h1>Hola Mundo 👋🌍!</h1>
}
Ambos códigos son equivalentes.

⬆ Volver a índice

## ¿Cómo se transforma el JSX?
El JSX se transforma en código JavaScript compatible en el navegador usando un transpilador o compilador. El más famoso es a día de hoy Babel, que utiliza una serie de plugins para ser compatible con la transformación, pero existen otros como SWC.

Puedes ver cómo se transforma el JSX en el playground de código de Babel.

Hay casos especiales en los que un transpilador no es necesario. Por ejemplo, Deno tiene soporte nativo para la sintaxis JSX y no es necesario transformar el código para hacerlo compatible.

⬆ Volver a índice

## ¿Cuál es la diferencia entre componente y elemento en React?
Un componente es una función o clase que recibe props y devuelve un elemento. Un elemento es un objeto que representa un nodo del DOM o una instancia de un componente de React.

// Elemento que representa un nodo del DOM
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}

// Elemento que representa una instancia de un componente
{
  type: Button,
  props: {
    color: 'blue',
    children: 'OK!'
  }
}
⬆ Volver a índice

¿Cómo crear un componente en React?
Los componentes en React son funciones o clases que devuelven un elemento de React. Hoy en día lo más recomendado es usar funciones:

function HelloWorld() {
  return <h1>Hello World!</h1>
}
Pero también puedes usar una clase para crear un componente React:

import { Component } from 'react'

class HelloWorld extends Component {
  render() {
    return <h1>Hello World!</h1>
  }
}
Lo importante es que el nombre de la función o clase empiece con una letra mayúscula. Esto es necesario para que React pueda distinguir entre componentes y elementos HTML.

⬆ Volver a índice

## ¿Qué son las props en React?
Las props son las propiedades de un componente. Son datos que se pasan de un componente a otro. Por ejemplo, si tienes un componente Button que muestra un botón, puedes pasarle una prop text para que el botón muestre ese texto:

function Button(props) {
  return <button>{props.text}</button>
}
Podríamos entender que el componente Button es un botón genérico, y que la prop text es el texto que se muestra en el botón. Así estamos creando un componente reutilizable.

Debe considerarse además que al usar cualquier expresión JavaScript dentro de JSX debe envolverlos con {}, en este caso el objeto props, de otra forma JSX lo considerará como texto plano.

Para usarlo, indicamos el nombre del componente y le pasamos las props que queremos:

<Button text="Haz clic aquí" />
<Button text="Seguir a @messi" />
Las props son una forma de parametrizar nuestros componentes igual que hacemos con las funciones. Podemos pasarle cualquier tipo de dato a un componente, incluso otros componentes.

⬆ Volver a índice

 ## ¿Qué diferencia hay entre props y state?
Las props son un objeto que se pasan como argumentos de un componente padre a un componente hijo. Son inmutables y no se pueden modificar desde el componente hijo.

El state es un valor que se define dentro de un componente. Su valor es inmutable (no se puede modificar directamente) pero se puede establecer un valor nuevo del estado para que React vuelva a renderizar el componente.

Así que mientras que tanto props como state afectan al renderizado del componente, su gestión es diferente.

⬆ Volver a índice

## ¿Qué es el renderizado condicional en React?
El renderizado condicional es la forma de mostrar un componente u otro dependiendo de una condición.

Para hacer renderizado condicional en React usamos el operador ternario:

function Button({ text }) {
  return text
    ? <button>{text}</button>
    : null
}
En este caso, si la prop text existe, se renderiza el botón. Si no existe, no se renderiza nada.

Es común encontrar implementaciones del renderizado condicional con el operador &&, del tipo:

function List({ listArray }) {
  return listArray?.length && listArray.map(item=>item)
}
Parece que tiene sentido... si el length es positivo (mayor a cero) pintamos el map. !Pues no! ❌ Cuidado, si tiene length de cero ya que se pintará en el navegador un 0.

Es preferible utilizar el operador ternario. Kent C. Dodds tiene un artículo interesante hablando del tema. Use ternaries rather than && in JSX

⬆ Volver a índice

## ¿Cómo puedes aplicar clases CSS a un componente en React?
Para aplicar clases CSS a un componente en React usamos la prop className:

function Button({ text }) {
  return (
    <button className="button">
      {text}
    </button>
  )
}
La razón por la que se llama className es porque class es una palabra reservada en JavaScript. Por eso, en JSX, tenemos que usar className para aplicar clases CSS.

⬆ Volver a índice

## ¿Cómo puedes aplicar estilos en línea a un componente en React?
Para aplicar estilos CSS en línea a un componente en React usamos la prop style. La diferencia de cómo lo haríamos con HTML, es que en React los estilos se pasan como un objeto y no como una cadena de texto (esto puede verse más claro con los dobles corchetes, los primeros para indicar que es una expresión JavaScript, y los segundos para crear el objeto):

function Button({ text }) {
  return (
    <button style={{ color: 'red', borderRadius: '2px' }}>
      {text}
    </button>
  )
}
Fíjate que, además, los nombres de las propiedades CSS están en camelCase.

⬆ Volver a índice

## ¿Cómo puedo aplicar estilos de forma condicional a un componente en React?
Puedes aplicar estilos de forma condicional a un componente en React usando la prop style y un operador ternario:

function Button({ text, primary }) {
  return (
    <button style={{ color: primary ? 'red' : 'blue' }}>
      {text}
    </button>
  )
}
En el caso anterior, si la prop primary es true, el botón tendrá el color rojo. Si no, tendrá el color azul.

También puedes seguir la misma mecánica usando clases. En este caso, usamos el operador ternario para decidir si añadir o no la clase:

function Button({ text, primary }) {
  return (
    <button className={primary ? 'button-primary' : ''}>
      {text}
    </button>
  )
}
También podemos usar bibliotecas como classnames:

import classnames from 'classnames'

function Button({ text, primary }) {
  return (
    <button className={classnames('button', { primary })}>
      {text}
    </button>
  )
}
En este caso, si la prop primary es true, se añadirá la clase primary al botón. Si no, no se añadirá. En cambio la clase button siempre se añadirá.

⬆ Volver a índice

## ¿Qué es el renderizado de listas en React?
El renderizado de listas es la forma de iterar un array de elementos y renderizar elementos de React para cada uno de ellos.

Para hacer renderizado de listas en React usamos el método map de los arrays:

function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item}</li>
      ))}
    </ul>
  )
}
En este caso, se renderiza una lista de elementos usando el componente List. El componente List recibe una prop items que es un array de strings. El componente List renderiza un elemento li por cada elemento del array.

El elemento li tiene una prop key que es un identificador único para cada elemento. Esto es necesario para que React pueda identificar cada elemento de la lista y actualizarlo de forma eficiente. Más adelante hay una explicación más detallada sobre esto.

⬆ Volver a índice

## ¿Cómo añadir un evento a un componente en React?
Para añadir un evento a un componente en React usamos la sintaxis on y el nombre del evento nativo del navegador en camelCase:

function Button({ text, onClick }) {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}
En este caso, el componente Button recibe una prop onClick que es una función. Cuando el usuario hace clic en el botón, se ejecuta la función onClick.

⬆ Volver a índice

## ¿Qué es el estado en React?
El estado es un objeto que contiene datos que pueden cambiar en el tiempo. En React, el estado se usa para controlar los cambios en la interfaz.

Para que entiendas el concepto, piensa en el interruptor de una habitación. Estos interruptores suelen tener dos estados: encendido y apagado. Cuando accionamos el interruptor y lo ponemos en on entonces la luz se enciende y cuando lo ponemos en off la luz se apaga.

Este mismo concepto se puede aplicar a la interfaz de usuario. Por ejemplo, el botón Me Gusta de Facebook tendría el estado de meGusta a true cuando el usuario le ha dado a Me Gusta y a false cuando no lo ha hecho.

No solo podemos tener en el estado valores booleanos, también podemos tener objetos, arrays, números, etc.

Por ejemplo, si tienes un componente Counter que muestra un contador, puedes usar el estado para controlar el valor del contador.

Para crear un estado en React usamos el hook useState:

import { useState } from 'react'

function Counter() {
  
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </div>
  )
}
Al usar el hook useState este devolverá un array de dos posiciones:

El valor del estado.
La función para cambiar el estado.
Suele usarse desestructuración para facilitar la lectura y ahorrarnos algunas lineas de código. Por otro lado, al pasarle un dato como parámetro al useState le estamos indicando su estado inicial.

Con un componente de clase, la creación del estado sería así:

import { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Aumentar
        </button>
      </div>
    )
  }
}
⬆ Volver a índice

## ¿Qué son los hooks?
Los Hooks son una API de React que nos permite tener estado, y otras características de React, en los componentes creados con una function.

Esto, antes, no era posible y nos obligaba a crear un componente con class para poder acceder a todas las posibilidades de la librería.

Hooks es gancho y, precisamente, lo que hacen, es que te permiten enganchar tus componentes funcionales a todas las características que ofrece React.

⬆ Volver a índice

## ¿Qué hace el hook useState?
El hook useState es utilizado para crear variables de estado, quiere decir que su valor es dinámico, que este puede cambiar en el tiempo y eso requiere una re-renderización del componente donde se utiliza

Recibe un parámetro:

El valor inicial de nuestra variable de estado.
Devuelve un array con dos variables:

En primer lugar tenemos la variable que contiene el valor
La siguiente variable es una función set, requiere el nuevo valor del estado, y este modifica el valor de la variable que anteriormente mencionamos
Cabe destacar que la función proporciona cómo parametro el valor actual del propio estado. Ex: setIsOpen(isOpen => !isOpen)
En este ejemplo mostramos como el valor de count se inicializa en 0, y también se renderiza cada vez que el valor es modificado con la función setCount en el evento onClick del button:

import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>Aumentar</button>
    </>
  )
}
⬆ Volver a índice

## ¿Qué hace el hook useEffect?
El hook useEffect se usa para ejecutar código cuando se renderiza el componente o cuando cambian las dependencias del efecto.

Recibe dos parámetros:

La función que se ejecutará al cambiar las dependencias o al renderizar el componente.
Un array de dependencias. Si cambia el valor de alguna dependencia, ejecutará la función.
En este ejemplo mostramos un mensaje en consola cuando carga el componente y cada vez que cambia el valor de count:

import { useEffect, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('El contador se ha actualizado')
  }, [count])

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </>
  )
}
⬆ Volver a índice

## Explica casos de uso del hook useEffect
Podemos usar el hook useEffect de diferentes formas, tales como:

Ejecutar código cuando se renderiza el componente, cuando cambian las dependencias del efecto o cuando se desmonta el componente.
Por eso puede ser útil para hacer llamadas a APIs, ya que sea nada más montar el componente o cuando cambian las dependencias.
Realizar tracking de eventos, como Google Analytics, para saber qué páginas visitan los usuarios.
Podemos validar un formulario para que cada vez que cambie el estado, podamos actualizar la UI y mostrar dónde están los errores.
Podemos suscribirnos a eventos del navegador, como por ejemplo el evento resize para saber cuando el usuario cambia el tamaño de la ventana.
⬆ Volver a índice

## Cómo suscribirse a un evento en useEffect
Dentro de useEffect nos podemos suscribir a eventos del navegador, como el evento resize para saber cuando el usuario cambia el tamaño de la ventana. Es importante que nos desuscribamos cuando el componente se desmonte para evitar fugas de memoria. Para ello, tenemos que devolver una función dentro del useEffect que se ejecutará cuando el componente se desmonte.

import { useEffect } from 'react'

function Window() {
  useEffect(() => {
    const handleResize = () => {
      console.log('La ventana se ha redimensionado')
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <p>Abre la consola y redimensiona la ventana</p>
  )
}
⬆ Volver a índice

## ¿Cómo podemos ejecutar código cuando el componente se monta?
Podemos ejecutar código cuando el componente se monta usando el hook useEffect sin pasarle ninguna dependencia. En este caso, la función que se pasa como primer parámetro se ejecutará cuando el componente se monte.

import { useEffect } from 'react'

function Component() {
  useEffect(() => {
    console.log('El componente se ha montado')
  }, [])

  return (
    <p>Abre la consola y re-dimensiona la ventana</p>
  )
}
⬆ Volver a índice

## ¿Qué son los Fragments en React?
Los Fragments son una forma de agrupar elementos sin añadir un elemento extra al DOM, ya que React no permite devolver varios elementos en un componente, solo un elemento raíz.

Para crear un Fragment en React usamos el componente Fragment:

import { Fragment } from 'react'

function App() {
  return (
    <Fragment>
      <h1>Titulo</h1>
      <p>Párrafo</p>
    </Fragment>
  )
}
También podemos usar la sintaxis de abreviatura:

function App() {
  return (
    <>
      <h1>Titulo</h1>
      <p>Párrafo</p>
    </>
  )
}
⬆ Volver a índice

## ¿Cómo puedes inicializar un proyecto de React desde cero?
Existen diversas formas de inicializar un proyecto de React desde cero. Una de las formas más sencillas es usando Vite.

npm create vite@latest your-react-app-name -- --template react
Vite es un empaquetador de aplicaciones web. Se encarga de resolver las dependencias de tu proyecto, levantar un entorno de desarrollo que se refresca automáticamente con cada cambio y de empaquetar tu aplicación para producción con todos los archivos estáticos necesarios.

⬆ Volver a índice

## ¿Qué es React DOM?
React DOM es la librería que se encarga de renderizar los componentes de React para el navegador. Hay que tener en cuenta que React es una biblioteca que se puede usar en diferentes entornos (dispositivos móviles, apps de escritorio, terminal...).

Mientras que la biblioteca de React, a secas, es el motor de creación de componentes, hooks, sistema de props y estado... React DOM es la librería que se encarga de renderizar los componentes de React específicamente en el navegador.

React Native, por ejemplo, haría lo mismo, pero para dispositivos móviles.

⬆ Volver a índice

