import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import Boton from "./Boton" */
import {Card} from "./Card"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
{/* <Boton numero={1}/> */}
<Card apellido = "Messi" fechaNac={1987} clubes= {["Newells ","Barcelona ", " PSG"]} mundial = {true} late={true} />
<Card apellido = "Ronaldo" fechaNac={1985} clubes= {["Lisboa ","Real Madrid ", " Manchester"]} mundial = {false} late={false} />

</>
);

