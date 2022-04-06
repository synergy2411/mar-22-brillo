const { Schema, model } = require("mongoose");

const profileSchema = new Schema({
    googleId : String,
    username : String,
    avatar : String
})

module.exports = model("Profile", profileSchema);