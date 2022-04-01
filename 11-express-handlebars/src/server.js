const express = require("express");
const hbs = require("handlebars");
const expHbs = require("express-handlebars");

const app = express();

app.engine("handlebars", expHbs.engine());          // engine for handlebar file; generate HTML file

app.set("view engine","handlebars")

app.get("/views/index", (req, res) => {
    res.render("index", {
        username : "Varsha",
        age :  23,
        friends : ["sarthak", "kajal", "shrusti"],
        haveFriends : true,
        helpers : {
            showInUpperCase : (val) => val.toUpperCase()
        }
    });
})

app.get("/views/about", (req, res) => {
    res.render("about");
})

app.listen("9000", () => console.log("Server started at PORT : 9000"))