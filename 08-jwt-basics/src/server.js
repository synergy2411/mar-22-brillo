const express = require("express");
require("./db");
const app = express();
app.use(express.json());
app.use(express.static(__dirname+"/public"));

app.get("/login", (req, res) => {
    res.sendFile(__dirname+"/public/login.html");
})

app.post("/signup", (req, res) => {
    console.log(req.body);
    return res.send({message : "SUCCESS"})
})

app.listen(9090, () => console.log("Server running on PORT:  9090"));