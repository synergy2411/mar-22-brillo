const express = require("express");
const { createPost, fetchAllPosts, fetchPost } = require("../controller/post.controller");

const PostRouter = express.Router();

PostRouter.route("/")       // http://localhost:9090/api/posts
    .get(fetchAllPosts)
    .post(createPost)
PostRouter.route("/:postId")        // http://localhost:9090/api/posts/:postId
    .get(fetchPost)

module.exports = PostRouter;