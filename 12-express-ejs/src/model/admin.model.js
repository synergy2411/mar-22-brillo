const  { Schema, model } = require("mongoose")

const adminSchema = new Schema({
    email : String,
    password : String
})

const AdminModel = model("Admin", adminSchema);

module.exports = AdminModel;