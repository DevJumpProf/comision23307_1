import { FaSearch } from "react-icons/fa";
import "./Buscador.css"
export const Buscador = () => {
  return (
    <form className="buscadorContainer">
      <div className="buscadorBox">
        <input 
        className="buscadorInput"
        type="text" 
        />
        <button type="submit" className="buscadorButton"><FaSearch/></button>
      </div>
    </form>
  );
};
