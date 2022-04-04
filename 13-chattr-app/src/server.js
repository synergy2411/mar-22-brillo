const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
// const nestedFn = require("socket.io");
// const io = nestedFn(server);
const io = require("socket.io")(server)
require("./db");
const ChatModel = require("./model/chats.model");

app.use(express.static(__dirname+"/public"));
const messageStack = [];

// Socket library trigger the 'connection' event for evey new client connected
io.on("connection", (socket) => {
    console.log("Client Connected...");
    // socket.emit("acknowledgement", {message : "You are connected now."})
    // socket.on("thanks", message => console.log(message))
    socket.on("toServer", ({chatterName, message}) => {
        console.log(chatterName  + " says : " + message);
        socket.emit("toClient", {message, chatterName : "Me"})
        socket.broadcast.emit("toClient", {message, chatterName})
        messageStack.push(message)
    })

    socket.on("disconnect", async ()=>{
        try{
            const chatData = new ChatModel({chatterName : socket.id, messages : messageStack})
            const savedChats = await chatData.save()
            console.log(savedChats)
        }catch(err){
            console.log(err)
        }
    })
})

app.get("/index", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})

server.listen(9001, () => console.log("Socket Server started at PORT : 9001"))


// emit() : emits/ trigger/ produce the event
// on() : register the handler

// process.on("exit", () => {console.log("Existing")})