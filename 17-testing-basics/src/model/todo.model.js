const { Schema, model } = require("mongoose")

const todoSchema = new Schema({
    label : String,
    status : Boolean
})

module.exports = model("Todo", todoSchema);