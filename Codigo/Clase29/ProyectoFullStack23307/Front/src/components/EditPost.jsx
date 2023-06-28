import axios from "axios"
import {useState,useEffect} from  "react"
import {useNavigate,useParams} from "react-router-dom"

const url = "http://localhost:8000/post/";

const EditPost = () =>{

    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
  
    const navigate = useNavigate();

    const {id} = useParams()

    // procedimiento para editar un post
    const editar = async (e) => {
        e.preventDefault();
        await axios.put(url+id, {
          title: titulo,
          content: contenido,
        });
        navigate("/");
      };

      //utilizo useeFfect para traer el post cuando se ingresa al componente

      useEffect(()=>{
//metodo para traer un post por su id
getPostById()
      },[])


      const getPostById=async()=>{
        const res = await axios.get(url+id)
       setTitulo(res.data.title)
       setContenido(res.data.content)
      }

    return(
        <div>
        <h1>Editar Post</h1>
        <form onSubmit={editar}>
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
          EDITAR
          </button>
        </form>
      </div>
    )
}

export default EditPost