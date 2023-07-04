import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpCliente";

import { Spinner } from "../Components/Spinner";

import "./PeliculaDetalle.css"

// style

export const PeliculaDetalle = () => {
  const { peliculaId } = useParams();

  const [cargando,setCargando]= useState(true);
  const [pelicula, setPelicula]  = useState(null);

  useEffect(() => {
    setCargando(true)
    get(`/movie/${peliculaId}`).then((data) => {
      setPelicula(data);
    /*    console.log(setPelicula); */
    setCargando(false)
    });
  }, [peliculaId]);

  if(cargando){
    return <Spinner/>
  }

  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;
  return (
    <div className="contenedorDetalle">
        <img className="col" src={imgURL} alt={pelicula.title} />
      <div className="peliculaDetalle col">
        <p className="item">
          <strong>Titulo:</strong>
          {pelicula.title}
        </p>
        <p>
            <strong>Generos:</strong>
            {pelicula.genres.map((genre)=>genre.name).join(", ")}
        </p>
        <p>
            <strong>Descripcion</strong>
            {pelicula.overview}
        </p>
      </div>
    </div>
  );
};
