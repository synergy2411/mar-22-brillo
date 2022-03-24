const express = require("express");

const app = express();
app.use(express.json());            // parse the req body

const todos = [
    {id : "t001", label : "grocery", status : false},
    {id : "t002", label : "shopping", status : true},
    {id : "t003", label : "insurance", status : false},
    {id : "t004", label : "planting", status : true},
]


// UPDATE -> http://localhost:9001/api/todos/{todoId}
app.patch("/api/todos/:todoId", (req, res) => {
    const {todoId} = req.params;
    const position = todos.findIndex(todo => todo.id === todoId)
    if(position >= 0){
        todos[position] = {...todos[position], ...req.body};            // {label, status}
        return res.send({...todos[position]});
    }else{
        return res.send({err : "Item not found for ID -> " + todoId})
    }
})


// DELETE -> http://localhost:9001/api/todos/{todoId}
app.delete("/api/todos/:todoId", (req, res) => {
    const {todoId} = req.params;
    const position = todos.findIndex(todo => todo.id === todoId);
    if(position >= 0){
        todos.splice(position, 1);
        return res.send({message : "item deleted for ID -> " + todoId})
    }else{
        return res.send({err : "Item not found for ID -> " + todoId})
    }
})


// GET -> http://localhost:9001/api/todos/{todoId}
app.get("/api/todos/:todoId", (req, res) => {
    const { todoId } = req.params;
    const foundItem = todos.find(todo => todo.id === todoId)
    if(foundItem){
        return res.send(foundItem)
    }else{
        return res.send({err : "Todo item notfound for ID -> " + todoId});
    }
})


// POST -> http://localhost:9001/api/todos
app.post("/api/todos", (req, res) => {
    // console.log(req.body);          // Reading request body
    let newTodo = { 
        ...req.body,
        id : 't00'+(todos.length + 1).toString(),
        status : false
    }
    todos.push(newTodo);
    res.send(newTodo)
})


// GET -> http://localhost:9001/api/todos
app.get("/api/todos", (req, res) => {
    res.send(todos)
})

// http://localhost:9001/
app.get("/", (req, res) => {
    res.send("Hello client!!!!")
})

app.listen(9001, () => console.log("Express server running on PORT : 9001"));