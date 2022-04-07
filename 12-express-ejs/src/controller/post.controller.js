const PostModel = require("../model/posts.model")

const getPosts = async (req, res) => {
    try{
        return res.render("welcome")
    }catch(err){
        return res.render("not-found", { err })
    }
}

const onLogin = (req, res) => res.render("login")

module.exports = { 
    getPosts, onLogin
}