const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

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
},{
    versionKey : false
})

// Statis Method attached with Model -> Called on Model itself
userSchema.statics.verifyPassword = async function(password){
    const isMatch = await bcrypt.compare(password, this.password)
    return isMatch;
}

// Instance method - called by Model instance
userSchema.methods.logger = function(){
    console.log("Logger works! ", this)
}

userSchema.pre("save", async function(next) {
    const hashedPassword = await bcrypt.hash(this.password, 12);
    this.password = hashedPassword;
    next()
})

userSchema.post("save", () => {
    console.log("Post saving the data")
})

userSchema.pre("remove", function(){
    console.log("Pre - remove")
})
userSchema.post("remove", function(){
    console.log("Post - remove")
})

const UserModel = model("User", userSchema);

module.exports = UserModel;