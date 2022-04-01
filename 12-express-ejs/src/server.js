const express = require("express");
const ejs = require("ejs");
const expEjsLayouts = require("express-ejs-layouts");

const app = express();

app.use(expEjsLayouts);
app.set('layout', './layouts/layout');
app.set("view engine", "ejs");

app.get("/views/welcome", (req, res) => {
    res.render("welcome", {
        username : "asfiya"
    });
})
app.get("/views/login", (req, res) => {
    res.render("login");
})

app.listen(9090, () => console.log("Server Started at PORT : 9090"))