const API = "https://api.themoviedb.org/3"

export const get =(path)=>{
return fetch (API+path,{
    headers:{
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3M2I5NmRkYzI1NjU4YWQxN2M5MDQ0MGU3ZjYxYmQ2NyIsInN1YiI6IjYzZjY5NzFkMWYzMzE5MDA4NDNhYzQ5NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AcIf3KJ97EjbNZB_54h8sZF6a_l8JzmeBjruFnMVTxs",
        "Content-Type":"application/json;charset=utf-8",
    }
}).then((results)=>results.json())

}