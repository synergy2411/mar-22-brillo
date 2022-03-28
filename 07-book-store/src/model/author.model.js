const { Schema, model } = require("mongoose");

const authorSchema = new Schema({
  name: {
    type: Schema.Types.String,
    require: true,
  },
  age: {
    type: Schema.Types.Number,
  },
});

const AuthorModel = model("Author", authorSchema);

module.exports = AuthorModel;
