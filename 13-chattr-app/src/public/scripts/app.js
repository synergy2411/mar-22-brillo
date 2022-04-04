window.onload = function(){
    console.log("Script Loaded")
    const socket = io.connect("/")
    socket.on("acknowledgement", (data) => {
        console.log(data)
    })

    socket.emit("thanks", {message : "Thanks for letting me connect"})

    const btnSend = document.getElementById("btnSend")
    const txtMessage = document.getElementById("txtMessage")
    btnSend.addEventListener("click", (event)=>{
        event.preventDefault();
        socket.emit("toServer", { message : txtMessage.value})
        txtMessage.value = '';
    })
}