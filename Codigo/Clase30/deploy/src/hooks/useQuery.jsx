import {useLocation} from  "react-router-dom" //10 importamos useLocation https://reactrouter.com/en/main/hooks/use-location
//12 utilizamos este hook para tomar lo que viene por params
export const useQuery = ()=>{
    return new URLSearchParams(useLocation().search) //https://developer.mozilla.org/es/docs/Web/API/URLSearchParams
  }
  

  
  //11- vemos en el navegador lo que viaja en la url(queryparams), separamos lo que buscamos (location.search)
  /* const location = useLocation()
  console.log(location);
  console.log(location.search);  */