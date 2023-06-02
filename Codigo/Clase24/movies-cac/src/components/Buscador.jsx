import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 4 importo useNavigate
import { useState } from "react"; //7 importamos useState
import "./Buscador.css";
export const Buscador = () => {
  const navigate = useNavigate(); //5 traigo la ejecucion y lo guaro en la variable
  // 1 realiza la funcion que nos permita captura lo que ingresamos en el input del buscador. y lo envie a la url

  /* 8 estados para capturar el input */
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //3 mostrar que no se realiza el submit
    navigate(`/?search=${searchText}`); //6 las preparo el useNavigate para enviar lo buscado a la url
  };

  return (
    <form className="buscadorContainer" onSubmit={handleSubmit}>
  
      {/* 2 agregamos el evento */}
      <div className="buscadorBox">
        <input
          className="buscadorInput"
          /*       9 valor del estado inicial */
          value={searchText}
          /*  10 trabajamos con el evento onChange capturando el cambio en el input */
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
        />
        <button type="submit" className="buscadorButton">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};
