window.onload = function(){
    const chatterName = prompt("Please enter you name -");
    const socket = io.connect("/")
    // socket.on("acknowledgement", (data) => {
    //     console.log(data)
    // })

    // socket.emit("thanks", {message : "Thanks for letting me connect"})

    const btnSend = document.getElementById("btnSend")
    const txtMessage = document.getElementById("txtMessage")
    const taMsg = document.getElementById("taMsg")

    btnSend.addEventListener("click", (event)=>{
        event.preventDefault();
        socket.emit("toServer", { message : txtMessage.value, chatterName : chatterName})
        txtMessage.value = '';
    });

    socket.on("toClient", ({message, chatterName}) =>{
        taMsg.append(chatterName + " : " + message + "\n")
    })
}