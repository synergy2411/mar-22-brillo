const express = require("express");

const app = express();
app.use(express.json());            // parse the req body
app.use(express.static(__dirname + "/public"))

let todos = [
    {id : "t001", label : "grocery", status : false},
    {id : "t002", label : "shopping", status : true},
    {id : "t003", label : "insurance", status : false},
    {id : "t005", label : "plants", status : true},
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


// http://localhost:9001/api/todos?sortby=label&limit=3

// http://localhost:9001/api/todos?sortby=label

// GET -> http://localhost:9001/api/todos?limit=3
app.get("/api/todos", (req, res) => {
    // console.log(req.query)               // to receive query parameter
    const { limit, sortby, search } = req.query;

    if(search){
        todos = todos.filter(todo => todo.label.split('')[0] === search)
    }

    if(sortby){
        todos = todos.sort((a,b)=>{
            let firstEl = a[sortby];
            let secondEl = b[sortby];
            if(firstEl < secondEl) return -1
            if(firstEl > secondEl) return 1
            return 0
        })
    }
    if(limit){
        const limitedTodos = todos.filter((todo, index) => index < Number(limit))
        return res.send(limitedTodos);
    }else{
        res.send(todos)
    }
})

// http://localhost:9001/
app.get("/", (req, res) => {
    // res.send("Hello client!!!!")
    // res.sendFile(__dirname + "/public/index.html")
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(9001, () => console.log("Express server running on PORT : 9001"));