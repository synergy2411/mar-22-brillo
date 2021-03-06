const express = require("express");
const ejs = require("ejs");
const jwt = require("jsonwebtoken");
require("./db");
const expEjsLayouts = require("express-ejs-layouts");
const PostRouter = require("./router/posts.routes");
const AdminModel = require("./model/admin.model");
const PostModel = require("./model/posts.model");

const app = express();
app.use(express.urlencoded({extended : false}))         // parse form data and attach it with req.body
app.use(express.json());

app.use(express.static(__dirname+'/public'))
app.use(expEjsLayouts);
app.set('layout', './layouts/layout');
app.set("view engine", "ejs");

app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body;
   try {
       const foundUser = await AdminModel.findOne({email,password})
       if(foundUser){
        const token = jwt.sign({id : foundUser._id.toString()},"Secret")
        return res.send({token, message : "SUCCESS"})
       }else{
        return res.send({message : "Unable to find user"})
       }
   } catch (error) {
       console.log(error)
    return res.send(error)
   }
})

const ensureToken = (req, res, next) => {
    const authHeadeer = req.headers.authorization;
    console.log(authHeadeer);
    if(!authHeadeer){
        return res.redirect("/views/login")
    }
    const token = authHeadeer.split(" ")[1]
    req.token = token;
    next();
}

app.get("/user/posts", ensureToken, (req, res) => {
    jwt.verify(req.token, "Secret", async (err, decode)=>{
        if(err){
            console.log(err);
            return res.send(err);
        }
        const { id } = decode;
        console.log("ID -> ", id)
        try {
            const posts = await PostModel.find({admin : id})
            console.log("POSTS -> ", posts)
            return res.send(posts)
        } catch (error) {
            console.log(error)
            return res.send({error})
        }
    })
})

app.use("/views", PostRouter)

app.get("/redirect", (req, res) => {res.redirect("/views/welcome")})

app.listen(9090, () => console.log("Server Started at PORT : 9090"))

