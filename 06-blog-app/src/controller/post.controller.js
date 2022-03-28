const PostModel = require("../model/post.model");

const createPost = (req, res) => {
    const post = new PostModel(req.body);
    post.save()
        .then(result => {
            return res.send(result);
        }).catch(err=> {
            return res.send({err})
        })
}

const fetchAllPosts = (req, res) => {
    PostModel.find()
    .then(docs => {
        return res.send(docs)
    }).catch(console.log)
}

const fetchPost = (req, res) => {
    const { postId } = req.params; 
    PostModel.findById(postId)
        .then(doc => {
            return res.send(doc)
        }).catch(err => res.send({err}))
}

const deletePost = (req, res) => {
    const { postId } = req.params;
    PostModel.deleteOne({_id : postId})
    // PostModel.findByIdAndRemove(postId)
        .then(result => res.send(result))
        .catch(err => res.send({err}))
}

const updatePost = (req, res) => {
    const { postId } = req.params;
    PostModel.findByIdAndUpdate(postId,{...req.body})
        .then(result => res.send(result))
        .catch(err => res.send({err}))
}

module.exports = {
    createPost, fetchAllPosts, fetchPost, deletePost, updatePost
}