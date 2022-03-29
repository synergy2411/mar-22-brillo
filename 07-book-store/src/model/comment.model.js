const { Schema, model } = require("mongoose")

const commentSchema = new Schema({
    body : {
        type : Schema.Types.String,
        required : true
    },
    user :{
        type : Schema.Types.ObjectId,
        ref : 'Author',
        required : true
    },
    book : {
        type : Schema.Types.ObjectId,
        ref : "Book",
        required : true
    }
})

const CommentModel = model("Comment", commentSchema);

module.exports = CommentModel;