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
    try {
        const createdTodo = new TodoModel(req.body);
        const todo = await createdTodo.save();
        return res.send(todo)
    } catch (error) {
        return res.send(error)
    }
}

const getTodoById = async(req, res) => {
    try {
        const {id} = req.params;
        const foundItem = await TodoModel.findById(id)
        if(foundItem){
            return res.send(foundItem)
        }
        return res.send({message : "unable to find item for " + id})
    } catch (error) {
        return res.send(error)
    }
}

module.exports = { getAllTodos, createTodo, getTodoById }