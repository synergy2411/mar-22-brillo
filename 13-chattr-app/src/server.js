const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
// const nestedFn = require("socket.io");
// const io = nestedFn(server);
const io = require("socket.io")(server)

app.use(express.static(__dirname+"/public"));

app.get("/index", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

server.listen(9001, () => console.log("Socket Server started at PORT : 9001"))