let getNameFetch = (idPost) => {
 try {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then((res) => {
        /* console.log(res) */
        return res.json();
      })
  
      .then((post) => {
        /*     console.log(post); */
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
          .then((res) => {
            /* console.log(res) */
            return res.json();
          })
          .then((user) => {
            console.log(
              `el post ${idPost} con el titulo ${post.title} y lo escribió : ${user.name} y vive en: ${user.address.city}`
            );
          });
      });
  
 } catch (error) {
    console.log(error)
 }

};

getNameFetch(8);