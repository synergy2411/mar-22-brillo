const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
  name: {
    type: Schema.Types.String,
    require: true,
  },
  age: {
    type: Schema.Types.Number,
  },
  books : [{
    type : Schema.Types.ObjectId,
    ref : "Book"
  }]
});

const AuthorModel = model("Author", authorSchema);

module.exports = AuthorModel;
