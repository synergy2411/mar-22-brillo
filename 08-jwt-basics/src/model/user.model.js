const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email : {
        type : Schema.Types.String,
        required : true,
        validate : {
            validator : val => val.includes('@'),
            message : () => "Email should be proper format"
        },
        unique : true
    },
    password : {
        type : Schema.Types.String,
        required : true
    }
},{
    versionKey : false
})

const UserModel = model("User", userSchema)

module.exports = UserModel;