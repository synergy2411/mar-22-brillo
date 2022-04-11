const TodoModel = require("../model/todo.model");

const getAllTodos = async (req, res) => {
    try {
        const todos = await TodoModel.find();
        return res.send(todos)
    } catch (error) {
        return res.send(error)
    }
}

const createTodo = async (req, res) => {

}

module.exports = { getAllTodos, createTodo }