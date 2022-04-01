const { Schema, model } = require("mongoose")

const userSchema = new Schema({
    username : String,
    email : String,
    password : String,
    age : Number
})

const UserModel = model("User", userSchema)

module.exports = UserModel;