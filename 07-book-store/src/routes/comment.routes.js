const express = require("express");
const { getAllComment, createComment } = require("../controller/comment.controller");

const CommentRouter = express.Router();

CommentRouter.route("/")
    .get(getAllComment)
    .post(createComment)

module.exports = CommentRouter;