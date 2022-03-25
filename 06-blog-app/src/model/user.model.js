const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        minlength : [6, "Username must have atleast 6 characters"],
        maxlength : [25, "Username should not exceed 25 characters"]
    },
    password : {
        type : String,
        required : true
    }, 
    email : {
        type : String,
        required : true,
        validate : {
            validator : (value) => {
                return value.includes('@');
            },
            message : () => "Email is NOT in proper format"
        }
    }, 
    age : {
        type : Number,
        min : [18, "Too young to login"],
        max : [60, "Too old to work"],
        required : true
    },
    role : {
        type : String,
        enum : ['Employee', "Admin", "User"],
        default : "Employee"
    }
})

const UserModel = model("User", userSchema);

module.exports = UserModel;