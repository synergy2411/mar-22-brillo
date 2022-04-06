const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./db");
require("./config/passport.config");
const ViewRouter = require("./router/views.routes");
const AuthRouter = require("./router/auth.routes");
const app = express()

app.use(cookieSession({
    maxAge : 24 * 60 * 60 * 1000,
    keys : ["MyCookieSecretKey"]
}))

app.use(passport.initialize());                 // initial passport to use express app
app.use(passport.session());                    // Express session used by passport

app.use(express.urlencoded({extended : false}));            // Populate the Request body from Form Data

app.set("view engine", "ejs")

app.use("/auth", AuthRouter)
app.use("/views", ViewRouter)

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(9000, () => console.log("Server started at PORT : 9000"))