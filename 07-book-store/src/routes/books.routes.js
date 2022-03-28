const express = require("express");
const { getAllBooks, createBook } = require("../controller/books.conttroller");

const BookRouter = express.Router();

BookRouter.route("/")
    .get(getAllBooks)
    .post(createBook)


module.exports = BookRouter;