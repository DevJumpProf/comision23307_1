// funcion para que cargue las peliculas...

let pagina = 1 // variable para controla la paginacion

//capturar los botones

let btnAnterior = document.querySelector("#btnAnterior")
let btnSiguiente = document.querySelector("#btnSiguiente")
/* 
funcion boton anterior */

btnAnterior.addEventListener("click",()=>{
    if(pagina>1){
     /*    pagina = pagina -1 */
        pagina-=1
        //llamar a la funcion que carga la pagina
    }
})

btnSiguiente.addEventListener("click",()=>{
    if(pagina<=500){
  
        pagina+=1
        //llamar a la funcion que carga la pagina
    }
})


