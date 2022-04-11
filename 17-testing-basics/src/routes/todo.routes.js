const { getAllTodos, createTodo, getTodoById } = require("../controller/todo.controller");

const router = require("express").Router();

router.route("/")
    .get(getAllTodos)
    .post(createTodo)

router.route("/:id")
    .get(getTodoById)

module.exports = router;