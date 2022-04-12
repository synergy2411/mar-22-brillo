const express = require("express");
require("./db");
const TodoRouter = require("./routes/todo.routes");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.use("/api/todos", TodoRouter);

module.exports = app;