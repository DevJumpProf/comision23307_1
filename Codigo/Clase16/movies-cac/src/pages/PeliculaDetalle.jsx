import { get } from "../utils/httpCliente.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PeliculaDetalle.css";

export const PeliculaDetalle = () => {
  const { peliculaId } = useParams();
  const [pelicula, setPelicula] = useState(null);

  useEffect(() => {
    //llamado a la api
    get(`/movie/${peliculaId}`).then((data) => {
      setPelicula(data);
    });
  }, [peliculaId]);

  if (!pelicula) {
    return null;
  }
  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;
  return (
    <div className="contenedorDetalle">
      <img className="col" src={imgURL} alt={pelicula.title} />
      <div className="peliculaDetalle">
        <p className="item">
          <strong>Titulo: </strong>
          {pelicula.title}
        </p>
        <p>
          <strong>Description: </strong>
          {pelicula.overview}
        </p>

        <p>
          <strong>Generos: </strong>
          {pelicula.genres.map((genre) => genre.name).join(", ")}
        </p>
      </div>
    </div>
  );
};
