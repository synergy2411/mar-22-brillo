const { getAllTodos, createTodo, getTodoById, deleteTodoById, updateTodoById } = require("../controller/todo.controller");

const router = require("express").Router();

router.route("/")
    .get(getAllTodos)
    .post(createTodo)

router.route("/:id")
    .get(getTodoById)
    .delete(deleteTodoById)
    .patch(updateTodoById)

module.exports = router;