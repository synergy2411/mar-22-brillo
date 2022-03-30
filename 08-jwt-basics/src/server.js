const express = require("express");
require("./db");
const app = express();

app.get("/login", (req, res) => {
    res.sendFile(__dirname+"/public/login.html");
})

app.listen(9090, () => console.log("Server running on PORT:  9090"));