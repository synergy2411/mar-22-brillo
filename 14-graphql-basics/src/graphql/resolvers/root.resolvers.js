const { users, posts, comments } = require("../../db/data");
module.exports = {
  authors: () => {
      const userWithPosts = users.map(user => {
         const userPosts =  posts.filter(post => post.author === user.id)
         const userComments = comments.filter(comment => comment.creator === user.id)
         return {...user, posts : userPosts, comments : userComments}
      })
      return userWithPosts;
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
  posts : () => {
      const postWithUser = posts.map(post => {
          const foundUser = users.find(user => user.id === post.author)
            return {...post, author : foundUser}
        })
      return postWithUser;
  },
  comments : () => {
      const commentWithUser = comments.map(comment => {
          const foundUser = users.find(user => user.id === comment.creator)
          return {...comment, creator : foundUser}
      })
      return commentWithUser;
  }
};
