const express = require("express");
const PostModel = require("../model/post.model");

const PostRouter = express.Router();

PostRouter.route("/")       // http://localhost:9090/api/posts
    .get((req, res) => {
        PostModel.find()
        .then(docs => {
            return res.send(docs)
        }).catch(console.log)
    })
    .post((req, res) => {
        const post = new PostModel(req.body);
        post.save()
            .then(result => {
                return res.send(result);
            }).catch(err=> {
                return res.send({err})
            })
    })

module.exports = PostRouter;