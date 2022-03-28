const { Schema, model } = require("mongoose")

const postSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    body :{
        type : String,
        required : true
    },
    published : {
        type : Boolean,
        default : false
    }
})

postSchema.pre("deleteOne", function(){
    console.log("Pre deleteOne")
})
postSchema.post("deleteOne", function(){
    console.log("Post deleteOne")
})
postSchema.pre("save", function(){
    console.log("Pre save")
})
postSchema.post("save", function(){
    console.log("Post save")
})
postSchema.pre("validate", function(){
    console.log("Pre validate")
})
postSchema.post("validate", function(){
    console.log("Post validate")
})


const PostModel = model("Post", postSchema);



module.exports = PostModel;
