const AuthorModel = require("../model/author.model");

const getAllAuthors = async (req, res) => {
    try{
        const allAuthors = await AuthorModel.find();
        return res.send(allAuthors);
    }catch(err){
        console.log(err);
        return res.send(err)
    }
}

const createAuthor = async (req, res) => {
    try{
        const author = new AuthorModel(req.body);
        const createdAuthor = await author.save()
        return res.send(createdAuthor)
    }catch(err){
        return res.send(err)
    }
}


module.exports = {
     getAllAuthors, createAuthor
}