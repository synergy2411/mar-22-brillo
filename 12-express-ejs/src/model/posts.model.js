const { Schema, model } = require("mongoose")

const postSchema = new Schema({
    title : {
        type : Schema.Types.String,
        required : true
    },
    body : {
        type : Schema.Types.String,
        required : true
    },
    published : {
        type : Schema.Types.Boolean,
        default : false
    }
})

const PostModel = model("Post", postSchema);

module.exports = PostModel;