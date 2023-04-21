import { PeliculasGrid } from "./components/PeliculasGrid";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import "./App.css";

function App() {
  return (
   <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className="title">Peliculas</h1>
        </Link> 
        </header>

        <Routes>
          <Route path="/" element={<PeliculasGrid/>}/>
          <Route path="/pelicula/:peliculaId" element="detalle de pelicula"/>
        </Routes>
 
      </BrowserRouter>
  );
}

export default App;
