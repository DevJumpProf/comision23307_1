import "./Card.css"

export function Card ({apellido,fechaNac,clubes,mundial,late}){
return (
    <>      
<h2 className={mundial?"dorado":"plateado"}>{apellido}</h2>
{/* <small style={{backgroundColor:mundial?"gold":"silver"}} >{fechaNac}</small> */}
<small  >{fechaNac}</small>
<p>{clubes}</p>
<small>{mundial?"Gano un mundial🥇":"Sigue Participando👎🏾"}</small>
<h6>{late?"Late ✅":"Nola ❌"}</h6>
</>
)
}





