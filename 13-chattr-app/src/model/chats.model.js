const { Schema, model } = require("mongoose")

const chatSchema = new Schema({
    chatterName :{
        type : Schema.Types.String,
        required : true
    },
    messages : {
        type : [Schema.Types.String],
        required : true
    }
})

const ChatModel = model("Chat", chatSchema)

module.exports = ChatModel;