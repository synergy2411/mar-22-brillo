const express = require("express");
require("./db");
const TodoRouter = require("./routes/todo.routes");

const app = express();

app.use(express.json());

app.use("/api/todos", TodoRouter);

module.exports = app;