const express = require("express");
const { getAllAuthors, createAuthor } = require("../controller/author.controller");

const AuthorRouter = express.Router();

AuthorRouter.route("/")
    .get(getAllAuthors)
    .post(createAuthor)


module.exports = AuthorRouter;