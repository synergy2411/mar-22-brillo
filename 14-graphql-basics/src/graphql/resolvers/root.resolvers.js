let { users, posts, comments } = require("../../db/data");
const { v4 } = require("uuid");

module.exports = {
  authors: () => {
    const userWithPostsAndComments = users.map((user) => {
      const userPosts = posts.filter((post) => post.author === user.id);
      const userComments = comments.filter(
        (comment) => comment.creator === user.id
      );
      return { ...user, posts: userPosts, comments: userComments };
    });
    return userWithPostsAndComments;
  },
  author: (params) => {
    const foundUser = users.find((user) =>
      user.name.toLowerCase().includes(params.name.toLowerCase())
    );
    if (foundUser) {
      return foundUser;
    }
    return new Error("User not found for name - " + params.name);
  },
  posts: () => {
    const postWithUserAndComments = posts.map((postEl) => {
      const foundUser = users.find((user) => user.id === postEl.author);
      const postWithComments = comments.filter(
        (comment) => comment.post === postEl.id
      );
      return { ...postEl, author: foundUser, comments: postWithComments };
    });
    return postWithUserAndComments;
  },
  comments: () => {
    const commentWithUserAndPost = comments.map((comment) => {
      const foundUser = users.find((user) => user.id === comment.creator);
      const foundPost = posts.find((post) => post.id === comment.post);
      return { ...comment, creator: foundUser, post: foundPost };
    });
    return commentWithUserAndPost;
  },
  createUser: (args) => {
    const { name, age } = args.data;
    const newUser = { id: v4(), name, age };
    users.push(newUser);
    return newUser;
  },
  createPost: ({ data }) => {
    const { title, body, authorId } = data;
    const foundUser = users.find((user) => user.id === authorId);
    if (foundUser) {
      const newPost = {
        id: v4(),
        title,
        body,
        published: false,
        author: authorId,
      };
      posts.push(newPost);
      return newPost;
    }
    throw new Error("Author ID does not exist");
  },
  createComment: ({ data }) => {
    const { text, authorId, postId } = data;
    const foundUser = users.find((u) => u.id === authorId);
    if (!foundUser) {
      throw new Error("User ID does not exist " + authorId);
    }
    const foundPost = posts.find((p) => p.id === postId);
    if (!foundPost) {
      throw new Error("Post ID does not exist - " + postId);
    }
    const newComment = {
      id: v4(),
      text,
      post: postId,
      creator: authorId,
    };
    comments.push(newComment);
    return newComment;
  },
  deleteComment: ({ id }) => {
    const position = comments.findIndex((comment) => comment.id === id);
    if (position >= 0) {
      const deletedItem = comments.splice(position, 1);
      return deletedItem[0];
    }
    throw new Error("Can't delete Comment - " + id);
  },
  deletePost : ({id}) => {
      const foundPost = posts.find(p => p.id === id);
      if(!foundPost){
          throw new Error("Post ID doent not found - ", id)
      }
      comments = comments.filter(comment => comment.post !== id);
      const position = posts.findIndex(p=> p.id === id)
      const deletedPost = posts.splice(position, 1)
      return deletedPost[0]
  },
  updateUser : ({id, data}) => {
    const position = users.findIndex(u => u.id === id)
    if(position >= 0){
      const { name, age } = data;
      if(name){
        users[position].name = name;
      }
      if(age){
        users[position].age = age
      }
      return users[position];
    }
    throw new Error("Unable to find User - " + id)
  }
};
