const express = require("express");
const ejs = require("ejs");
require("./db");
const expEjsLayouts = require("express-ejs-layouts");
const PostRouter = require("./router/posts.routes");

const app = express();


app.use(express.static(__dirname+'/public'))
app.use(expEjsLayouts);
app.set('layout', './layouts/layout');
app.set("view engine", "ejs");

app.use("/views", PostRouter)

app.use("/redirect", (req, res) => {res.redirect("/views/welcome")})

app.listen(9090, () => console.log("Server Started at PORT : 9090"))