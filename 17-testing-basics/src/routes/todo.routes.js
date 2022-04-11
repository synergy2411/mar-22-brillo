const { getAllTodos, createTodo, getTodoById, deleteTodoById } = require("../controller/todo.controller");

const router = require("express").Router();

router.route("/")
    .get(getAllTodos)
    .post(createTodo)

router.route("/:id")
    .get(getTodoById)
    .delete(deleteTodoById)

module.exports = router;