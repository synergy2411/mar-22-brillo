require("./db");
const express = require("express");
const AuthorRouter = require("./routes/author.routes")
const BookRouter = require("./routes/books.routes")

const app = express();
app.use(express.json())

app.use("/api/books", BookRouter);
app.use("/api/authors", AuthorRouter)

app.listen(3001, () => console.log("Server started at PORT : 3001"))