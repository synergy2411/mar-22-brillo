const { Schema, model } = require("mongoose");

const CommentSchema = new Schema ({
    text : {
        type : Schema.Types.String,
        required :  true
    },
    creator :{
        type : Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    post :{
        type : Schema.Types.ObjectId,
        required : true,
        ref : "Post"
    }

})

const CommentModel = model("Comment", CommentSchema);

module.exports = CommentModel;