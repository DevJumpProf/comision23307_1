const getNameAxios = async (idPost)=>{

try {
    let resPost = await axios (`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    console.log(resPost);
    let resUser = await axios (`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
document.write (`${resUser.data.name}, vive en ${resUser.data.address.city} escribio el post ${idPost}`)
} catch (error) {
    console.log(error);
}

}

getNameAxios(45)