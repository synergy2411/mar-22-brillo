const express = require("express");

const app = express();

// Application level middleware
app.use(express.json());
app.use(express.static(__dirname+'/public'));

// Route Level Middlewares
const middleware1 = (req, res, next) => {
    console.log("Middleware 1")
    req.token = "token value"
    next()
}
const middleware2 = (req, res, next) => {
    console.log("Middleware 2 - ", req.token)
    // return res.send({message  :"Middleware 2 responded"})
    next()
}
const middleware3 = (req, res, next) => {
    console.log("Middleware 3", req.token)
    next()
}

app.get("/api", middleware1, middleware2, middleware3, (req, res)=>{
    return res.send({message : "API SUCCESS", token : req.token})
})


app.listen(9090, () => console.log(`Server started at PORT : 9090`))