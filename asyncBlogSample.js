const posts = [
  { name: "Post 1", description: "Description 1" },
  { name: "Post 2", description: "Description 2" },
  { name: "Post 3", description: "Description 3" },
  { name: "Post 4", description: "Description 4" },
];
const listPosts = () => {
  posts.forEach((item) => console.log(item.name));
};

const addPost = (newPost) => {
  return new Promise((res, rej) => {
    if (newPost) {
      posts.push(newPost);
      res(newPost);
    } else {
      rej("New post not found");
    }
  });
};

const showPosts = async () => {
  try {
    let addedPost = await addPost({
      name: "Post 5",
      description: "Description 5",
    });
    addedPost && listPosts();
  } catch (error) {
    console.log("ERROR:", error);
  }
};
showPosts();
