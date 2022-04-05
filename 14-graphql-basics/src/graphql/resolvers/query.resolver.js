let { users, posts, comments } = require("../../db/data");

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
};
