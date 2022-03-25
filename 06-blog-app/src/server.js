const express = require("express");
require("./db");
const PostModel = require("./model/post.model");

const app = express();
app.use(express.json());

app.post("/api/posts", (req, res) => {
    const post = new PostModel(req.body);
    post.save()
        .then(result => {
            return res.send(result);
        }).catch(err=> {
            return res.send({err})
        })
})

app.get("/api/posts", (req, res) => {
    PostModel.find()
        .then(docs => {
            return res.send(docs)
        }).catch(console.log)
})

app.listen(9090, () => console.log("Server started at PORT : 9090"))
