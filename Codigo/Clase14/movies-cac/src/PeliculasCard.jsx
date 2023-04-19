import "./PeliculasCard.css"
export const PeliculasCard = ({pelicula}) => {

    const imgURL= `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`

  return (
    <li className="moviesCard">
      <img className="movieImage" src={imgURL} alt={pelicula.title} />
      <div>{pelicula.original_title}</div>
    </li>
  );
};
