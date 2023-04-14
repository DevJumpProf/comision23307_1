import React from 'react';
import ReactDOM from 'react-dom/client';
import CardB from "./CardB"

import './index.css';
/* import Boton from "./ejemplos/Boton" 
import {Card} from "./ejemplos/Card" */
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
{/*  <Boton numero={1} onClick={()=>console.log("sumaste")}/> 
<Card apellido = "Messi" fechaNac={1987} clubes= {["Newells ","Barcelona ", " PSG"]} mundial = {true} late={true} />
<Card apellido = "Ronaldo" fechaNac={1985} clubes= {["Lisboa ","Real Madrid ", " Manchester"]} mundial = {false} late={false} />
 */}
 <CardB/>
</>
);

