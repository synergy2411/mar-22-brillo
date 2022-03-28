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
    }
})

const BookModel = model("books", booksSchema);

module.exports = BookModel;