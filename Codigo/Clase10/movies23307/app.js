// funcion para que cargue las peliculas...
window.addEventListener("load", () => {
  cargarPeliculas();
});

let pagina = 1; // variable para controla la paginacion

//capturar los botones

let btnAnterior = document.querySelector("#btnAnterior");
let btnSiguiente = document.querySelector("#btnSiguiente");
/* 
funcion boton anterior */

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    /*    pagina = pagina -1 */
    pagina -= 1;
    //llamar a la funcion que carga la pagina
    cargarPeliculas();
  }
});

btnSiguiente.addEventListener("click", () => {
  if (pagina <= 500) {
    pagina += 1;
    //llamar a la funcion que carga la pagina
    cargarPeliculas();
  }
});

// funcion que carga las peliculas

const cargarPeliculas = async () => {
  try {
    let respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=73b96ddc25658ad17c90440e7f61bd67&language=es-MX&page=${pagina}`
    );

    if (respuesta.status === 200) {
      let datos = await respuesta.json();
      let peliculas = "";
      datos.results.forEach((pelicula) => {
        peliculas += `<div class="pelicula">
<img class= "poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}"  />
<h3 class= "titulo">${pelicula.title}</h3>
</div>`;
      });
      document.querySelector(".contenedor").innerHTML = peliculas;
    } else if (respuesta.status === 404) {
      console.log("la pagina no existe");
    }
  } catch (error) {
    console.log(error);
  }
  document.querySelector(".pagina").innerHTML = `Pagina N: ${pagina}`;
};
