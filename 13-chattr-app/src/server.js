const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
// const nestedFn = require("socket.io");
// const io = nestedFn(server);
const io = require("socket.io")(server)

app.use(express.static(__dirname+"/public"));

// Socket library trigger the 'connection' event for evey new client connected
io.on("connection", (socket) => {
    console.log("Client Connected...");
    socket.emit("acknowledgement", {message : "You are connected now."})
    socket.on("thanks", message => console.log(message))
    socket.on("toServer", data => {
        console.log("CLient says : " + data.message)
    })
})

app.get("/index", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

server.listen(9001, () => console.log("Socket Server started at PORT : 9001"))


// emit() : emits/ trigger/ produce the event
// on() : register the handler

// process.on("exit", () => {console.log("Existing")})