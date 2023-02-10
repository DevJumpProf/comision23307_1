## React - Experto

¿Es React una biblioteca o un framework? ¿Por qué?
¿Para qué sirve el hook useImperativeHandle?
¿Qué son los portales en React?
¿Por qué StrictMode renderiza dos veces la aplicación?
¿Qué problemas crees que pueden aparecer en una aplicación al querer visualizar listas de miles/millones de datos?
¿Cómo puedes abortar una petición fetch con useEffect en React?
¿Qué solución/es implementarías para evitar problemas de rendimiento al trabajar con listas de miles/millones de datos?
Pagination
Virtualization
¿Qué es el hook useDebugValue?
¿Qué es el Profiler en React?
¿Cómo puedes acceder al evento nativo del navegador en React?
¿Cómo puedes registrar un evento en la fase de captura en React?
¿Cómo puedes mejorar el rendimiento del Server Side Rendering en React para evitar que bloquee el hilo principal?
¿Qué diferencia hay entre renderToStaticNodeStream() y renderToPipeableStream()?
¿Para qué sirve el hook useDeferredValue?
¿Para qué sirve el método renderToReadableStream()?
¿Qué es Flux?
Errores Típicos en React
¿Qué quiere decir: Warning: Each child in a list should have a unique key prop?
React Hook useXXX is called conditionally. React Hooks must be called in the exact same order in every component render
Can’t perform a React state update on an unmounted component



Experto
 ¿Es React una biblioteca o un framework? ¿Por qué?
Existe una fina línea hoy en día entre qué es una biblioteca o un framework. Oficialmente, React se autodenomina como biblioteca. Esto es porque para poder crear una aplicación completa, necesitas usar otras bibliotecas.

Por ejemplo, React no ofrece un sistema de enrutado de aplicaciones oficial. Por ello, hay que usar una biblioteca como React Router o usar un framework como Next.js que ya incluye un sistema de enrutado.

Tampoco puedes usar React para añadir las cabeceras que van en el <head> en tu aplicación, y también necesitarás otra biblioteca o framework para solucionar esto.

Otra diferencia es que React no está opinionado sobre qué empaquetador de aplicaciones usar. En cambio Angular en su propio tutorial ya te indica que debes usar @angular/cli para crear una aplicación, en cambio React siempre te deja la libertad de elegir qué empaquetador usar y ofrece diferentes opciones.

Aún así, existe gente que considera a React como un framework. Aunque no hay una definición oficial de qué es un framework, la mayoría de la gente considera que un framework es una biblioteca que incluye otras bibliotecas para crear una aplicación completa de forma opinionada y casi sin configuración.

Por ejemplo, Next.js se podría considerar un framework de React porque incluye React, un sistema de enrutado, un sistema de renderizado del lado del servidor, etc.

⬆ Volver a índice

 ¿Para qué sirve el hook useImperativeHandle?
Nos permite definir qué propiedades y métodos queremos que sean accesibles desde el componente padre.

En el siguiente ejemplo vamos a crear un componente TextInput que tiene un método focus que cambia el foco al elemento <input>.

import { useRef, useImperativeHandle } from 'react'

function TextInput(props, ref) {
  const inputEl = useRef(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputEl.current.focus()
    }
  }))

  return (
    <input ref={inputEl} type="text" />
  )
}
Creamos una referencia inputEl con useRef y la pasamos al elemento <input> como prop ref. Cuando el componente se monta, la referencia inputEl apunta al elemento <input> del DOM.

Para acceder al elemento del DOM, usamos la propiedad current de la referencia.

Para que el componente padre pueda acceder al método focus, usamos el hook useImperativeHandle. Este hook recibe dos parámetros: una referencia y una función que devuelve un objeto con las propiedades y métodos que queremos que sean accesibles desde el componente padre.

⬆ Volver a índice

 ¿Qué son los portales en React?
Los portales nos permiten renderizar un componente en un nodo del DOM que no es hijo del componente que lo renderiza.

Es perfecto para ciertos casos de uso como, por ejemplo, modales:

import { createPortal } from 'react-dom'

function Modal() {
  return createPortal(
    <div className="modal">
      <h1>Modal</h1>
    </div>,
    document.getElementById('modal')
  )
}
createPortal acepta dos parámetros:

El primer parámetro es el componente que queremos renderizar
El segundo parámetro es el nodo del DOM donde queremos renderizar el componente
En este caso el modal se renderiza en el nodo #modal del DOM.

⬆ Volver a índice

 ¿Por qué StrictMode renderiza dos veces la aplicación?
Cuando el modo StrictMode está activado, React monta los componentes dos veces (el estado y el DOM se preserva). Esto ayuda a encontrar efectos que necesitan una limpieza o expone problemas con race conditions.

¿Qué problemas crees que pueden aparecer en una aplicación al querer visualizar listas de miles/millones de datos?
Tiempo de respuesta del servidor: Hacer peticiones de millones de datos no es, en general, una buena estrategia. Incluso en el mejor de los casos, en el que el servidor solo debe devolver los datos sin tratarlos, hay un coste asociado al parseo y envío de los mismos a través de la red. Llamadas con un tamaño desmesurado pueden incurrir en interfaces lentas, e incluso en timeouts en la respuesta.
Problemas de rendimiento: Aunque es cierto que React se basa en un modelo declarativo en el cual no debemos tener una exhaustivo control o gestión de cómo se renderiza, no hay que olvidar que malas decisiones técnicas pueden conllevar aplicaciones totalmente inestables incluso con las mejores tecnologías. No es viable renderizar un DOM con millones de elementos, el navegador no podrá gestionarlo y, tarde o temprano, la aplicación no será usable.
Como developers, nuestra misión es encontrar el equilibrio entre rendimiento y experiencia, intentando priorizar siempre cómo el usuario sentirá la aplicación. No hay ningún caso lo suficientemente justificado para renderizar en pantalla miles de datos.

El espacio de visualización es limitado (viewport), al igual que deberían serlo los datos que añadimos al DOM.

⬆ Volver a índice

 ¿Cómo puedes abortar una petición fetch con useEffect en React?
Si quieres evitar que exista una race condition entre una petición asíncrona y que el componente se desmonte, puedes usar la API de AbortController para abortar la petición cuando lo necesites:

import { useEffect, useState } from 'react'

function Movies () {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // creamos un controlador para abortar la petición
    const abortController = new AbortController()

    // pasamos el signal al fetch para que sepa que debe abortar
    fetchMovies({ signal: controller.signal })
      .then(() => {
        setMovies(data.results)
      }).catch(error => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted')
        }
      })

    return () => {
      // al desmontar el componente, abortamos la petición
      // sólo funcionará si la petición sigue en curso
      controller.abort()
    }
  })

  // ...
}

// Debemos pasarle el parámetro signal al `fetch`
// para que enlace la petición con el controlador
const fetchMovies = ({ signal }) => {
  return fetch('https://api.themoviedb.org/3/movie/popular', {
    signal // <--- pasamos el signal
  }).then(response => response.json())
}
De esta forma evitamos que se produzca un error por parte de React de intentar actualizar el estado de un componente que ya no existe, además de evitar que se produzcan llamadas innecesarias al servidor.

⬆ Volver a índice

 ¿Qué solución/es implementarías para evitar problemas de rendimiento al trabajar con listas de miles/millones de datos?
Pagination
En lugar de recibir la lista en una sola llamada a la API (lo cual sería negativo tanto para el rendimiento como para el propio servidor y tiempo de respuesta de la API), podríamos implementar un sistema de paginación en el cual la API recibirá un offset o rango de datos deseados. En el FE nuestra responsabilidad es mostrar unos controles adecuados (interfaz de paginación) y gestionar las llamadas a petición de cambio de página para siempre limitar la cantidad de DOM renderizado evitando así una sobrecarga del DOM y, por lo tanto, problemas de rendimiento.

Virtualization
Existe una técnica llamada Virtualización que gestiona cuántos elementos de una lista mantenemos vivos en el DOM. El concepto se basa en solo montar los elementos que estén dentro del viewport más un buffer determinado (para evitar falta de datos al hacer scroll) y, en cambio, desmontar del DOM todos aquellos elementos que estén fuera de la vista del usuario. De este modo podremos obtener lo mejor de los dos mundos, una experiencia integrada y un DOM liviano que evitará posibles errores de rendimiento. Con esta solución también podremos aprovechar que contamos con los datos en memoria para realizar búsquedas/filtrados sin necesidad de más llamadas al servidor.

Puedes consultar esta librería para aplicar Virtualización con React: React Virtualized.

Hay que tener en cuenta que cada caso de uso puede encontrar beneficios y/o perjuicios en ambos métodos, dependiendo de factores como capacidad de respuesta de la API, cantidad de datos, necesidad de filtros complejos, etc. Por ello es importante analizar cada caso con criterio.

⬆ Volver a índice

 ¿Qué es el hook useDebugValue?
Nos permite mostrar un valor personalizado en la pestaña de React DevTools que nos permitirá depurar nuestro código.

import { useDebugValue } from 'react'

function useCustomHook() {
  const value = 'custom value'
  useDebugValue(value)
  return value
}
En este ejemplo, el valor personalizado que se muestra en la pestaña de React DevTools es custom value.

Aunque es útil para depurar, no se recomienda usar este hook en producción.

⬆ Volver a índice

 ¿Qué es el Profiler en React?
El Profiler es un componente que nos permite medir el tiempo que tarda en renderizarse un componente y sus hijos.

import { Profiler } from 'react'

function App() {
  return (
    <Profiler id="App" onRender={(id, phase, actualDuration) => {
      console.log({id, phase, actualDuration})
    }}>
      <Component />
    </Profiler>
  )
}
El componente Profiler recibe dos parámetros:

id: es un identificador único para el componente
onRender: es una función que se ejecuta cada vez que el componente se renderiza
Esta información es muy útil para detectar componentes que toman mucho tiempo en renderizarse y optimizarlos.

⬆ Volver a índice

 ¿Cómo puedes acceder al evento nativo del navegador en React?
React no expone el evento nativo del navegador. En su lugar, React crea un objeto sintético que se basa en el evento nativo del navegador llamado SyntheticEvent. Para acceder al evento nativo del navegador, debemos usar el atributo nativeEvent:

function Button({ onClick }) {
  return <button onClick={e => onClick(e.nativeEvent)}>Haz clic aquí</button>
}
⬆ Volver a índice

 ¿Cómo puedes registrar un evento en la fase de captura en React?
En React, los eventos se registran en la fase de burbuja por defecto. Para registrar un evento en la fase de captura, debemos añadir Capture al nombre del evento:

function Button({ onClick }) {
  return <button onClickCapture={onClick}>Haz clic aquí</button>
}
⬆ Volver a índice

 ¿Cómo puedes mejorar el rendimiento del Server Side Rendering en React para evitar que bloquee el hilo principal?
Aunque puedes usar el método renderToString para renderizar el HTML en el servidor, este método es síncrono y bloquea el hilo principal. Para evitar que bloquee el hilo principal, debemos usar el método renderToPipeableStream:

let didError = false
const stream = renderToPipeableStream(
  <App />,
  {
    onShellReady() {
      // El contenido por encima de los límites de Suspense ya están listos
      // Si hay un error antes de empezar a hacer stream, mostramos el error adecuado
      res.statusCode = didError ? 500 : 200
      res.setHeader('Content-type', 'text/html')
      stream.pipe(res)
    },
    onShellError(error) {
      // Si algo ha ido mal al renderizar el contenido anterior a los límites de Suspense, lo indicamos.
      res.statusCode = 500
      res.send(
        '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>'
      )
    },
    onAllReady() {
      // Si no quieres hacer streaming de los datos, puedes usar
      // esto en lugar de onShellReady. Esto se ejecuta cuando
      // todo el HTML está listo para ser enviado.
      // Perfecto para crawlers o generación de sitios estáticos

      // res.statusCode = didError ? 500 : 200
      // res.setHeader('Content-type', 'text/html')
      // stream.pipe(res)
    },
    onError(err) {
      didError = true
      console.error(err)
    },
  }
)
⬆ Volver a índice

 ¿Qué diferencia hay entre renderToStaticNodeStream() y renderToPipeableStream()?
renderToStaticNodeStream() devuelve un stream de nodos estáticos, esto significa que no añade atributos extras para el DOM que React usa internamente para poder lograr la hidratación del HTML en el cliente. Esto significa que no podrás hacer el HTML interactivo en el cliente, pero puede ser útil para páginas totalmente estáticas.

renderToPipeableStream() devuelve un stream de nodos que contienen atributos del DOM extra para que React pueda hidratar el HTML en el cliente. Esto significa que podrás hacer el HTML interactivo en el cliente pero puede ser más lento que renderToStaticNodeStream().

⬆ Volver a índice

 ¿Para qué sirve el hook useDeferredValue?
El hook useDeferredValue nos permite renderizar un valor con una prioridad baja. Esto es útil para renderizar un valor que no es crítico para la interacción del usuario.

function App() {
  const [text, setText] = useState('¡Hola mundo!')
  const deferredText = useDeferredValue(text, { timeoutMs: 2000 })

  return (
    <div className='App'>
      {/* Seguimos pasando el texto actual como valor del input */}
      <input value={text} onChange={handleChange} />
      ...
      {/* Pero la lista de resultados se podría renderizar más tarde si fuera necesario */}
      <MySlowList text={deferredText} />
    </div>
  )
}
⬆ Volver a índice

 ¿Para qué sirve el método renderToReadableStream()?
Este método es similar a renderToNodeStream, pero está pensado para entornos que soporten Web Streams como Deno.

Un ejemplo de uso sería el siguiente:

const controller = new AbortController()
const { signal } = controller

let didError = false

try {
  const stream = await renderToReadableStream(
    <html>
      <body>Success</body>
    </html>,
    {
      signal,
      onError(error) {
        didError = true
        console.error(error)
      }
    }
  )

  // Si quieres enviar todo el HTML en vez de hacer streaming, puedes usar esta línea
  // Es útil para crawlers o generación estática:
  // await stream.allReady

  return new Response(stream, {
    status: didError ? 500 : 200,
    headers: {'Content-Type': 'text/html'},
  })
} catch (error) {
  return new Response(
    '<!doctype html><p>Loading...</p><script src="clientrender.js"></script>',
    {
      status: 500,
      headers: {'Content-Type': 'text/html'},
    }
  )
}
⬆ Volver a índice

 ¿Qué es Flux?
Flux es un patrón de arquitectura de aplicaciones que se basa en un unidireccional de datos. En este patrón, los datos fluyen en una sola dirección: de las vistas a los stores.

No es específico de React y se puede usar con cualquier librería de vistas. En este patrón, los stores son los encargados de almacenar los datos de la aplicación. Los stores emiten eventos cuando los datos cambian. Las vistas se suscriben a estos eventos para actualizar los datos.

Esta arquitectura fue creada por Facebook para manejar la complejidad de sus aplicaciones. Redux se basó en este patrón para crear una biblioteca de gestión de estado global.

⬆ Volver a índice

 Errores Típicos en React
¿Qué quiere decir: Warning: Each child in a list should have a unique key prop?
Es un error bastante común en React y que puede parecernos un poco extraño si estamos empezando a aprender esta tecnología. Por suerte, es bastante sencillo de solucionar.

Básicamente, este mensaje aparece en la consola cuando estamos renderizando un listado dentro de nuestro componente, pero no le estamos indicando la propiedad "key". React usa esta propiedad para determinar qué elemento hijo dentro de un listado ha sufrido cambios, por lo que funciona como una especie de identificativo.

De esta manera, React utiliza esta información para identificar las diferencias existentes con respecto al DOM y optimizar la renderización del listado, determinando qué elementos necesitan volverse a calcular. Esto habitualmente pasa cuando agregamos, eliminamos o cambiamos el orden de los items en una lista.

Recomendamos revisar las siguientes secciones:

¿Qué es el renderizado de listas en React?

¿Por qué puede ser mala práctica usar el ´index´ como key en un listado de React?

⬆ Volver a índice

 React Hook useXXX is called conditionally. React Hooks must be called in the exact same order in every component render
Una de las reglas de los hooks de React es que deben llamarse en el mismo orden en cada renderizado. React lo necesita para saber en qué orden se llaman los hooks y así mantener el estado de los mismos internamente. Por ello, los hooks no pueden usarse dentro de una condición if, ni un loop, ni tampoco dentro de una función anónima. Siempre deben estar en el nivel superior de la función.

Por eso el siguiente código es incorrecto:

// ❌ código incorrecto por saltar las reglas de los hooks
function Counter() {
  const [count, setCount] = useState(0)

  // de forma condicional, creamos un estado con el hook useState
  // lo que rompe la regla de los hooks
  if (count > 0) {
    const [name, setName] = useState("developer")
  }

  return <div>{count} {name}</div>
}
También el siguiente código sería incorrecto, aunque no lo parezca, ya que estamos usando el segundo useState de forma condicional (pese a no estar dentro de un if) ya que se ejecutará sólo cuando count sea diferente a 0:

// ❌ código incorrecto por saltar las reglas de los hooks
function Counter() {
  const [count, setCount] = useState(0)

  // si count es 0, no se ejecuta el siguiente hook useState
  // ya que salimos de la ejecución aquí
  if (count === 0) return null

  const [name, setName] = useState('developer')

  return <div>{count} {name}</div>
}
Ten en cuenta que si ignoras este error, es posible que tus componentes no se comporten de forma correcta y tengas comportamientos no esperados en el funcionamiento de tus componentes.

Para arreglar este error, como hemos comentado antes, debes asegurarte de que los hooks se llaman en el mismo orden en cada renderizado. El último ejemplo quedaría así:

function Counter() {
  const [count, setCount] = useState(0)
  // movemos el hook useState antes del if
  const [name, setName] = useState("developer")

  if (count === 0) return null

  return <div>{count} {name}</div>
}
Recomendamos revisar las siguientes secciones:

¿Cuáles son las reglas de los hooks en React?
⬆ Volver a índice

 Can’t perform a React state update on an unmounted component
Este error se produce cuando intentamos actualizar el estado de un componente que ya no está montado. Esto puede ocurrir cuando el componente se desmonta antes de que se complete una petición asíncrona, por ejemplo:

function Movies () {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchMovies().then(() => {
      setMovies(data.results)
    })
  })

  if (!movies.length) return null

  return (
    <section>
      {movies.map(movie => (
        <article key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </article>
      ))}
    </section>
  )
}
Parece un código inofensivo, pero imagina que usamos este componente en una página. Si el usuario navega a otra página antes de que se complete la petición, el componente se desmontará y React lanzará el error, ya que intentará ejecutar el setMovies en un componente (Movies) que ya no está montado.

Para evitar este error, podemos usar una variable booleana con useRef que nos indique si el componente está montado o no. De esta manera, podemos evitar que se ejecute el setMovies si el componente no está montado:

function Movies () {
  const [movies, setMovies] = useState([])
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

    fetchMovies().then(() => {
      if (mounted.current) {
        setMovies(data.results)
      }
    })

    return () => mounted.current = false
  })

  // ...
}
Esto soluciona el problema pero no evita que se haga la petición aunque el componente ya no esté montado. Para cancelar la petición y así ahorrar transferencia de datos, podemos abortar la petición usando la API AbortController:

function Movies () {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    // creamos un controlador para abortar la petición
    const abortController = new AbortController()

    // pasamos el signal al fetch para que sepa que debe abortar
    fetchMovies({ signal: controller.signal })
      .then(() => {
        setMovies(data.results)
      }).catch(error => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted')
        }
      })

    return () => {
      // al desmontar el componente, abortamos la petición
      // sólo funcionará si la petición sigue en curso
      controller.abort()
    }
  })

  // ...
}

// Debemos pasarle el parámetro signal al `fetch`
// para que enlace la petición con el controlador
const fetchMovies = ({ signal }) => {
  return fetch('https://api.themoviedb.org/3/movie/popular', {
    signal // <--- pasamos el signal
  }).then(response => response.json())
}
Sólo ten en cuenta la compatibilidad de AbortController en los navegadores. En caniuse puedes ver que no está soportado en Internet Explorer y versiones anteriores de Chrome 66, Safari 12.1 y Edge 16.

⬆ Volver a índice