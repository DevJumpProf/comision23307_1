import "./Card.css"

export function Card ({apellido,fechaNac,clubes,mundial,late}){
return (
    <>
<h2>{apellido}</h2>
<small className="small" style={{backgroundColor:"blue"}} >{fechaNac}</small>
<p>{clubes}</p>
<small>{mundial?"Gano un mundial🥇":"Sigue Participando👎🏾"}</small>
<h6>{late?"Late ✅":"Nola ❌"}</h6>
</>
)
}





