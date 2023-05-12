import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css';
import {Show} from "./components/Show";
import {Create} from "./components/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
   <Routes>
    <Route path="/" element={<Show/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/edit/:id" element= "Componente Edit"/>
   </Routes>
         </BrowserRouter>
    </div>
  );
}
export default App;
