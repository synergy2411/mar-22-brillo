let { users, posts, comments } = require("../../db/data");
const { v4 } = require("uuid");
const UserModel = require("../../model/users.model");
const PostModel = require("../../model/posts.model");
const CommentModel = require("../../model/comments.model");


// console.log(posts);

module.exports = {

  // resolver functions
  createUser: async (args) => {
    try {
      const newUser = new UserModel(args.data)
      const createdUser = await newUser.save()
      return { ...createdUser._doc, id: createdUser._id }
    } catch (error) {
      throw new Error(error)
    }

    // const { name, age } = args.data;
    // const newUser = { id: v4(), name, age };
    // users.push(newUser);
    // return newUser;
  },

  createPost: async ({ data }) => {
    try {
      const { title, body, authorId} = data;
        const newPost = new PostModel({title, body, author : authorId});
        const createdPost = await newPost.save()
        return {...createdPost._doc, id : createdPost._doc._id}
    } catch (error) {
      throw new Error(error)
    }

    // const { title, body, authorId } = data;
    // const foundUser = users.find((user) => user.id === authorId);
    // if (foundUser) {
    //   const newPost = {
    //     id: v4(),
    //     title,
    //     body,
    //     published: false,
    //     author: authorId,
    //   };
    //   posts.push(newPost);
    //   return newPost;
    // }
    // throw new Error("Author ID does not exist");
  },

  createComment: async ({ data }) => {
    try {
      const { text, postId, authorId } = data;
      const newComment = new  CommentModel({text, post : postId, creator : authorId})
      const createdComment = await newComment.save()
      return {...createdComment._doc, id : createdComment._doc._id}
    } catch (error) {
      throw new Error(error)
    }

    // const { text, authorId, postId } = data;

    // console.log("Posts -> ", posts);
    // const foundUser = users.find((u) => u.id === authorId);
    // if (!foundUser) {
    //   throw new Error("User ID does not exist " + authorId);
    // }
    // const foundPost = posts.find((p) => p.id === postId);
    // if (!foundPost) {
    //   throw new Error("Post ID does not exist - " + postId);
    // }
    // const newComment = {
    //   id: v4(),
    //   text,
    //   post: postId,
    //   creator: authorId,
    // };
    // comments.push(newComment);
    // return newComment;
  },

  deleteComment: async ({ id }) => {
    try {
      const deletedComment = await CommentModel.findByIdAndDelete(id)
      return deletedComment;
    } catch (error) {
      throw new Error(error)
    }
    // const position = comments.findIndex((comment) => comment.id === id);
    // if (position >= 0) {
    //   const deletedItem = comments.splice(position, 1);
    //   return deletedItem[0];
    // }
    // throw new Error("Can't delete Comment - " + id);
  },

  deletePost: async ({ id }) => {
    try {
      const deletedPost = await PostModel.findByIdAndDelete(id)
      const deletedComments = await CommentModel.deleteMany({post : id})
      console.log("DELETED COMMENTS - ", deletedComments);
      return deletedPost;
    } catch (error) {
        throw new Error(error);  
    }

    // const foundPost = posts.find((p) => p.id === id);
    // if (!foundPost) {
    //   throw new Error("Post ID doent not found - ", id);
    // }

    // comments = comments.filter((comment) => comment.post !== id);
    // const position = posts.findIndex((p) => p.id === id);
    // const deletedPost = posts.splice(position, 1);
    // return deletedPost[0];
  },

  deleteAuthor: ({ id }) => {
    const foundUser = users.find((user) => user.id === id);
    console.log("Posts:", posts);
    if (!foundUser) {
      throw new Error("User ID doent not found - ", id);
    }
    posts = posts.filter((post) => post.author !== id);

    console.log("post after deleting author -> ", posts);

    comments = comments.filter((comment) => comment.creator !== id);
    console.log(" comments after deleting author -> ", comments);


    const position = users.findIndex((user) => user.id === id);
    const deletedUser = users.splice(position, 1);
    return deletedUser[0];

    // console.log("Author Posts -> ",posts);
  },

  updateUser: async ({ id, data }) => {
    try {
      const {name, age} = data;
      const foundUser = await UserModel.findOne({_id : id})
      if(foundUser){
        const updatedUser = await UserModel.findByIdAndUpdate(id, {$set : { name, age }})
        console.log("Updated User -> ", updatedUser);
        return foundUser;
      }else{
        throw new Error("Unable to find User for ID - " + id)
      }
    } catch (error) {
      throw new Error(error)
    }

    // const position = users.findIndex((u) => u.id === id);
    // if (position >= 0) {
    //   const { name, age } = data;
    //   if (name) {
    //     users[position].name = name;
    //   }
    //   if (age) {
    //     users[position].age = age;
    //   }
    //   return users[position];
    // }
    // throw new Error("Unable to find User - " + id);
  },

  updatePost: ({ id, data }) => {
    const position = posts.findIndex((post) => post.id === id);
    if (position >= 0) {
      const { title, body, published } = data;
      if (title) {
        posts[position].title = title;
      }
      if (body) {
        posts[position].body = body;
      }
      if (published) {
        posts[position].published = published;
      }
      return posts[position];
    }
    throw new Error("Unable to find Post - " + id);
  },

  updateComment: ({ id, data }) => {
    const position = comments.findIndex((comment) => comment.id === id);
    if (position >= 0) {
      const { text } = data;
      if (text) {
        comments[position].text = text;
      }
      return comments[position];
    }
    throw new Error("Unable to find Comment - " + id);
  }
};