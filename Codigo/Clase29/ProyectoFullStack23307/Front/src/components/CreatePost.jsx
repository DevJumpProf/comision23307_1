import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8000/post/";

const CreatePost = () => {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const navigate = useNavigate();

  // procedimiento para crear un registro

  const crear = async (e) => {
    e.preventDefault();
    await axios.post(url, {
      title: titulo,
      content: contenido,
    });
    navigate("/");
  };

  return (
    <div>
      <h1>Crear Post</h1>
      <form onSubmit={crear}>
        <div className="mb-3">
          <label className="form-label">Titulo</label>
          <input
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            type="text"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contenido</label>
          <input
            className="form-control"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            type="text"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          CREAR
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
