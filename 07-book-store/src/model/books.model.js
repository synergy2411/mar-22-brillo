const { Schema, model } = require("mongoose");

const booksSchema = new Schema({
    title :{
        type : Schema.Types.String,
        required : true
    },
    published : {
        type : Schema.Types.Boolean,
        default : false
    },
    creator : {
        type : Schema.Types.ObjectId,
        ref : "Author"
    },
    comments : [{
        type : Schema.Types.ObjectId,
        ref : "Comment"
    }]
})

const BookModel = model("Book", booksSchema);

module.exports = BookModel;