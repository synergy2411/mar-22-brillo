const { Schema, model } = require("mongoose");

const postSchema = new Schema ({
    title : {
        type : Schema.Types.String,
        required : true
    },
    body :{
        type : Schema.Types.String,
        required : true
    },
    published : {
        type : Schema.Types.Boolean,
        default : false
    },
    author :{
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

const PostModel = model("Post", postSchema);

module.exports = PostModel;