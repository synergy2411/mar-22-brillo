const express = require("express");
const { getAllAuthors, createAuthor, deleteAuthor } = require("../controller/author.controller");

const AuthorRouter = express.Router();

AuthorRouter.route("/")
    .get(getAllAuthors)
    .post(createAuthor)
AuthorRouter.route("/:authorId")
    .delete(deleteAuthor)


module.exports = AuthorRouter;