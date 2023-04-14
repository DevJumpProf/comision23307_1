import {useState,useEffect} from "react"
import Button from "react-bootstrap/Button"


export const Counter = ()=>{
    const [count,setCount]= useState(10)

    useEffect(()=>{
console.log("Cambio el valor");
    },[count])


    return(
        <>
        <Button onClick={()=>setCount(count+1)} size="sm" variant="success">+</Button>
        <p>numero: {count} </p>
        <Button onClick={()=>setCount(count-1)} size="sm" variant="success">-</Button>
        </>
    )
}

