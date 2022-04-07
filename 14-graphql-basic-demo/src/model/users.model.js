const { Schema, model } = require("mongoose");

const userSchema = new Schema ({
    name : {
        type : Schema.Types.String,
        required :  true
    },
    age :{
        type : Schema.Types.Number,
        required : true
    }
})

const UserModel = model("User", userSchema);

module.exports = UserModel;