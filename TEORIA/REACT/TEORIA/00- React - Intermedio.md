## React - Intermedio

¿Cuántos useEffect puede tener un componente?
¿Cómo podemos ejecutar código cuando el componente se desmonta del árbol?
Cómo puedes cancelar una petición a una API en useEffect correctamente
¿Cuáles son las reglas de los hooks en React?
¿Qué diferencia hay entre useEffect y useLayoutEffect?
¿Qué son mejores los componentes de clase o los componentes funcionales?
¿Cómo mantener los componentes puros y qué ventajas tiene?
¿Qué es el Server Side Rendering y qué ventajas tiene?
¿Cómo puedes crear un Server Side Rendering con React desde cero?
¿Puedes poner un ejemplo de efectos colaterales en React?
¿Qué diferencia hay entre componentes controlados y no controlados? ¿Qué ventajas y desventajas tienen?
¿Qué son los High Order Components (HOC)?
¿Qué son las render props?
¿Por qué no podemos usar un if en el renderizado de un componente?
¿Por qué debemos utilizar una función para actualizar el estado de React?
¿Qué es el ciclo de vida de un componente en React?
¿Por qué puede ser mala práctica usar el ´index´ como key en un listado de React?
¿Para qué sirve el hook useMemo?
¿Es buena idea usar siempre useMemo para optimizar nuestros componentes?
¿Para qué sirve el hook useCallback?
¿Es buena idea usar siempre useCallback para optimizar nuestros componentes?
¿Cuál es la diferencia entre useCallback y useMemo?
¿Qué son las refs en React?
¿Cómo funciona el hook useRef?
¿Qué son los componentes stateless?
¿Cómo puedes prevenir el comportamiento por defecto de un evento en React?
¿Qué es el StrictMode en React?
¿Por qué es recomendable exportar los componentes de React de forma nombrada?
¿Cómo puedes exportar múltiples componentes de un mismo archivo?
¿Qué es el contexto en React?
¿Qué es el SyntheticEvent en React?
¿Qué es flushSync en React?
¿Qué son los Error Boundaries en React?

## ¿Cuántos useEffect puede tener un componente?
Aunque normalmente los componentes de React solo cuentan con un useEffect lo cierto es que podemos tener tantos useEffect como queramos en un componente. Cada uno de ellos se ejecutará cuando se renderice el componente o cuando cambien las dependencias del efecto.

⬆ Volver a índice

## ¿Cómo podemos ejecutar código cuando el componente se desmonta del árbol?
Podemos ejecutar código cuando el componente se desmonta usando el hook useEffect y dentro devolver una función con el código que queremos ejecutar. En este caso, la función que se pasa como primer parámetro del useEffect se ejecutará cuando el componente se monte, y la función que es retornada se ejecutará cuando se desmonte.

import { useEffect } from 'react'

function Component() {
  useEffect(() => {
    console.log('El componente se ha montado')

    return () => {
      console.log('El componente se ha desmontado')
    }
  }, [])

  return <h1>Ejemplo</h1>
}
Esto es muy útil para limpiar recursos que se hayan creado en el componente, como por ejemplo, eventos del navegador o para cancelar peticiones a APIs.

⬆ Volver a índice

Cómo puedes cancelar una petición a una API en useEffect correctamente
Cuando hacemos una petición a una API, podemos cancelarla para evitar que se ejecute cuando el componente se desmonte usando AbortController como hacemos en este ejemplo:

useEffect(() => {
  // Creamos el controlador para abortar la petición
  const controller = new AbortController()
  // Recuperamos la señal del controlador
  const { signal } = controller
  // Hacemos la petición a la API y le pasamos como options la señal
  fetch('https://jsonplaceholder.typicode.com/posts/1', { signal })
    .then(res => res.json())
    .then(json => setMessage(json.title))
    .catch(error => {
      // Si hemos cancelado la petición, la promesa se rechaza
      // con un error de tipo AbortError
      if (error.name !== 'AbortError') {
        console.error(error.message)
      }
    })

  // Si se desmonta el componente, abortamos la petición
  return () => controller.abort()
}, [])
Esto también funciona con axios:

useEffect(() => {
  // Creamos el controlador para abortar la petición
  const controller = new AbortController()
  // Recuperamos la señal del controlador
  const { signal } = controller
  // Hacemos la petición a la API y le pasamos como options la señal
  axios
    .get('https://jsonplaceholder.typicode.com/posts/1', { signal })
    .then(res => setMessage(res.data.title))
    .catch(error => {
      // Si hemos cancelado la petición, la promesa se rechaza
      // con un error de tipo AbortError
      if (error.name !== 'AbortError') {
        console.error(error.message)
      }
    })

  // Si se desmonta el componente, abortamos la petición
  return () => controller.abort()
}, [])
⬆ Volver a índice

## ¿Cuáles son las reglas de los hooks en React?
Los hooks en React tienen dos reglas fundamentales:

Los hooks solo se pueden usar en componentes funcionales o custom hooks.
Los hooks solo se pueden llamar en el nivel superior de un componente. No se pueden llamar dentro de bucles, condicionales o funciones anidadas.
⬆ Volver a índice

## ¿Qué diferencia hay entre useEffect y useLayoutEffect?
Aunque ambos son muy parecidos, tienen una pequeña diferencia en el momento en el que se ejecutan.

useLayoutEffect se ejecuta de forma síncrona inmediatamente después que React haya actualizado completamente el DOM tras el renderizado. Puede ser útil si necesitas recuperar un elemento del DOM y acceder a sus dimensiones o posición en pantalla.

useEffect se ejecuta de forma asíncrona tras el renderizado, pero no asegura que el DOM se haya actualizado. Es decir, si necesitas recuperar un elemento del DOM y acceder a sus dimensiones o posición en pantalla, no podrás hacerlo con useEffect porque no tienes la garantía de que el DOM se haya actualizado.

Normalmente, el 99% de las veces, vas a querer utilizar useEffect y, además, tiene mejor rendimiento, ya que no bloquea el renderizado.

⬆ Volver a índice

## ¿Qué son mejores los componentes de clase o los componentes funcionales?
Desde que en React 16.8.0 se incluyeron los hooks, los componentes de funciones pueden hacer casi todo lo que los componentes de clase.

Aunque no hay una respuesta clara a esta pregunta, normalmente los componentes funcionales son más sencillos de leer y escribir y pueden tener un mejor rendimiento en general.

Además, los hooks solo se pueden usar en los componentes funcionales. Esto es importante, ya que con la creación de custom hooks podemos reutilizar la lógica y podría simplificar nuestros componentes.

Por otro lado, los componentes de clase nos permiten usar el ciclo de vida de los componentes, algo que no podemos hacer con los componentes funcionales donde solo podemos usar useEffect.

Referencias:

⬆ Volver a índice

## ¿Cómo mantener los componentes puros y qué ventajas tiene?
Los componentes puros son aquellos que no tienen estado y que no tienen efectos secundarios. Esto quiere decir que no tienen ningún tipo de lógica que no sea la de renderizar la interfaz.

Son más fáciles de testear y de mantener. Además, son más fáciles de entender porque no tienen lógica compleja.

Para crear un componente puro en React usamos una function:

function Button({ text }) {
  return (
    <button>
      {text}
    </button>
  )
}
En este caso, el componente Button recibe una prop text que es un string. El componente Button renderiza un botón con el texto que recibe en la prop text.

⬆ Volver a índice

## ¿Qué es el Server Side Rendering y qué ventajas tiene?
El Server Side Rendering es una técnica que consiste en renderizar el HTML en el servidor y enviarlo al cliente. Esto nos permite que el usuario vea la interfaz de la aplicación antes de que se cargue el JavaScript.

Esta técnica nos permite mejorar la experiencia de usuario y mejorar el SEO de nuestra aplicación.

⬆ Volver a índice

## ¿Cómo puedes crear un Server Side Rendering con React desde cero?
Para crear un Server Side Rendering con React desde cero podemos usar el paquete react-dom/server que nos permite renderizar componentes de React en el servidor.

Veamos un ejemplo de cómo crear un Server Side Rendering con React desde cero con Express:

import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

const app = express()

app.get('/', (req, res) => {
  const html = renderToString(<h1>Hola mundo</h1>)
  res.send(html)
})
Esto nos devolverá el HTML de la aplicación al acceder a la ruta /.

<h1 data-reactroot="">Hola mundo</h1>
⬆ Volver a índice

## ¿Puedes poner un ejemplo de efectos colaterales en React?
Igual que las funciones en JavaScript, los componentes de React también pueden tener side effects (efectos colaterales). Un efecto colateral significa que el componente manipula o lee información que no está dentro de su ámbito.

Aquí puedes ver un ejemplo simple de un componente que tiene un efecto colateral. Un componente que lee y modifica una variable que está fuera del componente. Esto hace que sea imposible saber qué renderizará el componente cada vez que se use, ya que no sabemos el valor que tendrá count:

let count = 0

function Counter() {
  count = count + 1

  return (
    <p>Contador: {count}</p>
  )
}

export default function Counters() {
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  )
⬆ Volver a índice

## ¿Qué diferencia hay entre componentes controlados y no controlados? ¿Qué ventajas y desventajas tienen?
A la hora de trabajar con formularios en React, tenemos dos tipos de componentes: los componentes controlados y los componentes no controlados.

Los componentes controlados son aquellos que tienen un estado que controla el valor del componente. Por lo tanto, el valor del componente se actualiza cuando el estado cambia.

La ventaja de este tipo de componentes es que son más fáciles de testear porque no dependen de la interfaz. También nos permiten crear validaciones muy fácilmente. La desventaja es que son más complejos de crear y mantener. Además, pueden tener un peor rendimiento, ya que provocan un re-renderizado cada vez que cambia el valor del input.

Los componentes no controlados son aquellos que no tienen un estado que controle el valor del componente. El estado del componente lo controla el navegador de forma interna. Para conocer el valor del componente, tenemos que leer el valor del DOM.

La ventaja de este tipo de componentes es que se crean de forma muy fácil y no tienes que mantener un estado. Además, el rendimiento es mejor, ya que no tiene que re-renderizarse al cambiar el valor del input. Lo malo es que hay que tratar más con el DOM directamente y crear código imperativo.

// Controlado:
const [value, setValue] = useState('')
const handleChange = () => setValue(event.target.value)

<input type="text" value={value} onChange={handleChange} />

// No controlado:
<input type="text" defaultValue="foo" ref={inputRef} />
// Usamos `inputRef.current.value` para leer el valor del input
⬆ Volver a índice

¿Qué son los High Order Components (HOC)?
Los High Order Components son funciones que reciben un componente como parámetro y devuelven un componente.

function withLayout(Component) {
  return function(props) {
    return <main>
      <section>
        <Component {...props} />
      </section>
    </main>
  }
}
En este caso, la función withLayout recibe un componente como parámetro y devuelve un componente. El componente devuelto renderiza el componente que se le pasa como parámetro dentro de un layout.

Es un patrón que nos permite reutilizar código y así podemos inyectar funcionalidad, estilos o cualquier otra cosa a un componente de forma sencilla.

Con la llegada de los hooks, los HOCs se han vuelto menos populares, pero todavía se usan en algunos casos.

⬆ Volver a índice

## ¿Qué son las render props?
Son un patrón de diseño de React que nos permite reutilizar código entre componentes e inyectar información en el renderizado de los componentes.

<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>
En este caso, el componente DataProvider recibe una función render como prop. Ahí le indicamos qué es lo que debe renderizar usando la información que recibe como parámetro.

La implementación del DataProvider con funciones podría ser la siguiente:

function DataProvider({ render }) {
  const data = { target: 'world' }
  return render(data)
}
También se puede encontrar este patrón usando la prop children en los componentes.

<DataProvider>
  {data => (
    <h1>Hello {data.target}</h1>
  )}
</DataProvider>
Y la implementación sería similar:

function DataProvider({ children }) {
  const data = { target: 'world' }
  return children(data)
}
Este patrón es usado por grandes bibliotecas como react-router, formik o react-motion.

⬆ Volver a índice

## ¿Por qué no podemos usar un if en el renderizado de un componente?
En React, no podemos usar un if en el renderizado de un componente porque no es una expresión válida de JavaScript, es una declaración. Las expresiones son aquellas que devuelven un valor y las declaraciones no devuelven ningún valor.

En JSX solo podemos usar expresiones, por eso usamos ternarias, que sí son expresiones.

// ❌ Esto no funciona
function Button({ text }) {
  return (
    <button>
      {if (text) { return text } else { return 'Click' }}
    </button>
  )
}
De la misma forma, tampoco podemos usar for, while o switch dentro del renderizado de un componente.

⬆ Volver a índice

## ¿Por qué debemos utilizar una función para actualizar el estado de React?
A la hora de actualizar el estado de React, debemos utilizar la función que nos facilita el hook useState para actualizar el estado.

const [count, setCount] = useState(0)

setCount(count + 1)
¿Por qué es esto necesario? En primer lugar, el estado en React debe ser inmutable. Es decir, no podemos modificar el estado directamente, sino que debemos siempre crear un nuevo valor para el nuevo estado.

Esto nos permite que la integridad de la UI respecto a los datos que renderiza siempre es correcta.

Por otro lado, llamar a una función le permite a React saber que el estado ha cambiado y que debe re-renderizar el componente si es necesario. Además esto lo hace de forma asíncrona, por lo que podemos llamar a setCount tantas veces como queramos y React se encargará de actualizar el estado cuando lo considere oportuno.

⬆ Volver a índice

## ¿Qué es el ciclo de vida de un componente en React?
En los componentes de clase, el ciclo de vida de un componente se divide en tres fases:

Montaje: cuando el componente se añade al DOM.
Actualización: cuando el componente se actualiza.
Desmontaje: cuando el componente se elimina del DOM.
Dentro de este ciclo de vida, existe un conjunto de métodos que se ejecutan en el componente.

Estos métodos se definen en la clase y se ejecutan en el orden que se muestran a continuación:

constructor
render
componentDidMount
componentDidUpdate
componentWillUnmount
En cada uno de estos métodos podemos ejecutar código que nos permita controlar el comportamiento de nuestro componente.

⬆ Volver a índice

## ¿Por qué puede ser mala práctica usar el ´index´ como key en un listado de React?
Cuando renderizamos una lista de elementos, React necesita saber qué elementos han cambiado, han sido añadidos o eliminados.

Para ello, React necesita una key única para cada elemento de la lista. Si no le pasamos una key, React usa el índice del elemento como key.

const List = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
En este caso, React usa el índice del elemento como key. Esto puede ser un problema si la lista se reordena o se eliminan elementos del array, ya que el índice de los elementos cambia.

En este caso, React no sabe qué elementos han cambiado y puede que se produzcan errores.

Un ejemplo donde se ve el problema:

const List = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

  const handleRemove = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => handleRemove(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  )
}
⬆ Volver a índice

## ¿Para qué sirve el hook useMemo?
El hook useMemo es un hook que nos permite memorizar el resultado de una función. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve el resultado que ya se había calculado.

import { useMemo } from 'react'

function Counter({ count }) {
  const double = useMemo(() => count * 2, [count])

  return (
    <div>
      <p>Contador: {count}</p>
      <p>Doble: {double}</p>
    </div>
  )
}
En este caso, el componente Counter recibe una prop count que es un número. El componente calcula el doble de ese número y lo muestra en pantalla.

El hook useMemo recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop count.

La ventaja es que si la prop count no cambia, se evita el cálculo del doble y se devuelve el valor que ya se había calculado previamente.

⬆ Volver a índice

## ¿Es buena idea usar siempre useMemo para optimizar nuestros componentes?
No. useMemo es una herramienta que nos permite optimizar nuestros componentes, pero no es una herramienta mágica que nos va a hacer que nuestros componentes sean más rápidos. A veces el cálculo de un valor es tan rápido que no merece la pena memorizarlo. Incluso, en algunos casos, puede ser más lento memorizarlo que calcularlo de nuevo.

⬆ Volver a índice

## ¿Para qué sirve el hook useCallback?
El hook useCallback es un hook que nos permite memorizar una función. Esto quiere decir que si la función que le pasamos como parámetro no ha cambiado, no se ejecuta de nuevo y se devuelve la función que ya se había calculado.

import { useCallback } from 'react'

function Counter({ count, onIncrement }) {
  const handleIncrement = useCallback(() => {
    onIncrement(count)
  }, [count, onIncrement])

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  )
}
En este caso, el componente Counter recibe una prop count que es un número y una prop onIncrement que es una función que se ejecuta cuando se pulsa el botón.

El hook useCallback recibe dos parámetros: una función y un array de dependencias. La función se ejecuta cuando el componente se renderiza por primera vez y cuando alguna de las dependencias cambia, en este ejemplo la prop count o la prop onIncrement.

La ventaja es que si la prop count o la prop onIncrement no cambian, se evita la creación de una nueva función y se devuelve la función que ya se había calculado previamente.

⬆ Volver a índice

## ¿Es buena idea usar siempre useCallback para optimizar nuestros componentes?
No. useCallback es una herramienta que nos permite optimizar nuestros componentes, pero no es una herramienta mágica que nos va a hacer que nuestros componentes sean más rápidos. A veces la creación de una función es tan rápida que no merece la pena memorizarla. Incluso, en algunos casos, puede ser más lento memorizarla que crearla de nuevo.

⬆ Volver a índice

## ¿Cuál es la diferencia entre useCallback y useMemo?
La diferencia entre useCallback y useMemo es que useCallback memoriza una función y useMemo memoriza el resultado de una función.

En cualquier caso, en realidad, useCallback es una versión especializada de useMemo. De hecho se puede simular la funcionalidad de useCallback con useMemo:

const memoizedCallback = useMemo(() => {
  return () => {
    doSomething(a, b)
  }
}, [a, b])
⬆ Volver a índice

¿Qué son las refs en React?
Las refs nos permiten crear una referencia a un elemento del DOM o a un valor que se mantendrá entre renderizados. Se pueden declarar por medio del comando createRef o con el hook useRef.

⬆ Volver a índice

## ¿Cómo funciona el hook useRef?
En el siguiente ejemplo vamos a guardar la referencia en el DOM a un elemento <input> y vamos a cambiar el foco a ese elemento cuando hacemos clic en el botón.

import { useRef } from 'react'

function TextInputWithFocusButton() {
  const inputEl = useRef(null)

  const onButtonClick = () => {
    // `current` apunta al elemento inputEl montado
    inputEl.current.focus()
  }

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
Creamos una referencia inputEl con useRef y la pasamos al elemento <input> como prop ref. Cuando el componente se monta, la referencia inputEl apunta al elemento <input> del DOM.

Para acceder al elemento del DOM, usamos la propiedad current de la referencia.

⬆ Volver a índice

## ¿Qué son los componentes stateless?
Los componentes stateless son componentes que no tienen estado. Estos componentes se crean con una function y no tienen acceso al estado de la aplicación. La ventaja que tienen estos componentes es que hace que sea más fácil crear componentes puros (que siempre renderizan lo mismo para unas mismas props).

// Este es un ejemplo de componente stateless
function Button({ text }) {
  return (
    <button>
      {text}
    </button>
  )
}
⬆ Volver a índice

## ¿Cómo puedes prevenir el comportamiento por defecto de un evento en React?
Para prevenir el comportamiento por defecto de un evento en React, debemos usar el método preventDefault:

function Form({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit()
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" />
    <button type="submit">Enviar</button>
  </form>
}
⬆ Volver a índice

## ¿Qué es el StrictMode en React?
El StrictMode es un componente que nos permite activar algunas comprobaciones de desarrollo en React. Por ejemplo, detecta componentes que se renderizan de forma innecesaria o funcionalidades obsoletas que se están usando.

import { StrictMode } from 'react'

function App() {
  return (
    <StrictMode>
      <Component />
    </StrictMode>
  )
}
⬆ Volver a índice

## ¿Por qué es recomendable exportar los componentes de React de forma nombrada?
Los componentes de React se pueden exportar de dos formas:

Exportación por defecto
Exportación nombrada
Para exportar un componente por defecto, usamos la palabra reservada default:

// button.jsx
export default function Button() {
  return <button>Click</button>
}

// App.jsx
import Button from './button.jsx'

function App() {
  return <Button />
}
La gran desventaja que tiene la exportación por defecto es que a la hora de importarlo puedes usar el nombre que quieras. Y esto trae problemas, ya que puedes no usar siempre el mismo en el proyecto o usar un nombre que no sea correcto con lo que importas.

// button.jsx
export default function Button() {
  return <button>Click</button>
}

// App.jsx
import MiBoton from './button.jsx'

function App() {
  return <MiBoton />
}

// Otro.jsx
import Button from './button.jsx'

function Otro() {
  return <Button />
}
Los exports nombrados nos obligan a usar el mismo nombre en todos los archivos y, por tanto, nos aseguramos de que siempre estamos usando el nombre correcto.

// button.jsx
export function Button() {
  return <button>Click</button>
}

// App.jsx
import { Button } from './button.jsx'

function App() {
  return <Button />
}
⬆ Volver a índice

¿Cómo puedes exportar múltiples componentes de un mismo archivo?
Para exportar múltiples componentes de un mismo archivo, podemos usar la exportación nombrada:

// button.jsx
export function Button({children}) {
  return <button>{children}</button>
}

export function ButtonSecondary({children}) {
  return <button class="btn-secondary">{children}</button>
}
⬆ Volver a índice

## ¿Qué es el contexto en React?
El contexto es una forma de pasar datos a través de la jerarquía de componentes sin tener que pasar props manualmente en cada nivel.

Para crear un contexto en React usamos el hook createContext:

import { createContext } from 'react'

const ThemeContext = createContext()
Para usar el contexto, debemos envolver el árbol de componentes con el componente Provider:

<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
Para consumir el contexto, debemos usar el hook useContext:

import { useContext } from 'react'

function Button() {
  const theme = useContext(ThemeContext)
  return <button className={theme}>Haz clic aquí</button>
}
⬆ Volver a índice

## ¿Qué es el SyntheticEvent en React?
El SyntheticEvent es una abstracción del evento nativo del navegador. Esto le permite a React tener un comportamiento consistente en todos los navegadores.

Dentro del SyntheticEvent puede encontrarse una referencia al evento nativo en su atributo nativeEvent

function App() {
  function handleClick(event) {
    console.log(event)
  }

  return <button onClick={handleClick}>Haz clic aquí</button>
}
⬆ Volver a índice

## ¿Qué es flushSync en React?
flushSync(callback) Obliga a React a ejecutar síncronamente todas las actualizaciones de los state dentro del callback proporcionado. Así se asegura que el DOM se actualiza inmediatamente.

import { flushSync } from "react-dom";

function App() {
  const handleClick = () => {
    setId(1);
    // component no hace re-render 🚫  
    flushSync(() => {
      setId(2);
      // component re-renderiza aqui 🔄
    });  
    // component ha sido re-renderizado y el DOM ha sido actualizada ✅  
    flushSync(() => {
      setName("John");
      // component no hace re-render 🚫  
      setEmail("john@doe.com");
      // component re-renderiza aqui 🔄
    });  
    // component ha sido re-renderizado y el DOM ha sido actualizada ✅  
  }

  return <button onClick={handleClick}>Haz clic aquí</button>
}
NOTA: flushSync puede afectar significativamente el rendimiento. Úsalo con moderación.

⬆ Volver a índice

 ¿Qué son los Error Boundaries en React?
Los Error Boundaries son componentes que nos permiten manejar los errores que se producen en el árbol de componentes. Para crear un Error Boundary, debemos crear un componente que implemente el método componentDidCatch:

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <h1>Algo ha ido mal</h1>
    }

    return this.props.children
  }
}
De esta forma podemos capturar los errores que se producen en el árbol de componentes y mostrar un mensaje de error personalizado mientras evitamos que nuestra aplicación se rompa completamente.

Ahora podemos envolver el árbol de componentes con el componente ErrorBoundary:

<ErrorBoundary>
  <App />
</ErrorBoundary>
Podemos crear un Error Boundary en cualquier nivel del árbol de componentes, de esta forma podemos tener un control más granular de los errores.

<ErrorBoundary>
  <App />
  <ErrorBoundary>
    <SpecificComponent />
  </ErrorBoundary>
</ErrorBoundary>
Por ahora no existe una forma nativa de crear un Error Boundary en una función de React. Para crear un Error Boundary en una función, puedes usar la librería react-error-boundary.

⬆ Volver a índice