const PostModel = require("../model/posts.model")

const getPosts = async (req, res) => {
    try{
        const allPosts = await PostModel.find()
        return res.render("welcome", {
            posts : allPosts
        })
    }catch(err){
        return res.render("not-found", { err })
    }
}

const onLogin = (req, res) => res.render("login")

module.exports = { 
    getPosts, onLogin
}