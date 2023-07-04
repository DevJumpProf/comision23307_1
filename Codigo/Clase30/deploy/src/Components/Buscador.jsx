import { FaSearch } from "react-icons/fa";
import {useNavigate} from "react-router-dom" //7 importamos UseNavigate

import "./Buscador.css"
import { useState } from "react"; // 1 importar useState

export const Buscador = () => {

  
  const navigate = useNavigate() // 8 defino la variable
  const [txtBuscador,setTxtBuscador] = useState ("") //2 controlamos el estado del input

  //3 realizamos la funcion para controlar el submit (cuando apretamos el boton buscar)
  const handleSubmit = (e) =>{
e.preventDefault(); // 5 no se realiza el submit
navigate(`/?search=${txtBuscador}`) //9 enviar lo que se escribe en el input a la url
  }

  return (
    <form className="containerBuscador" onSubmit={handleSubmit}> {/* 4 ponemos el evento en el form handleSubmit */}
      <div className="cajaBuscador">
        <input 
        value={txtBuscador}
        onChange={(e)=>setTxtBuscador(e.target.value)}
    /* 6 mostramos como controlamos un input {(e)=>setTxtBuscador(e.target.value.toUpperCase())} */
        type="text" 
        className="inputBuscador" 
        />
        <button type="submit" className="botonBuscador">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};
