const getNameAsync = async (idPost) => {
  try {
    let resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    let post = await resPost.json();

    let resUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
   let user = await resUser.json();
    console.log(
        `el post ${idPost} con el titulo ${post.title} y lo escribió : ${user.name} y vive en: ${user.address.city}`
      );
  } catch (error) {
    console.log(error);
  }
};
getNameAsync(1);
