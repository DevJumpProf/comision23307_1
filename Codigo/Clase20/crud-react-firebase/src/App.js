import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';

import {Show} from "./components/Show";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Routes>
    <Route path="/" element={<Show/>}/>
    <Route path="/create" element= "Componente Create"/>
    <Route path="/edit/:id" element= "Componente Edit"/>
   </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
