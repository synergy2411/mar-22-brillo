const app = require("express")();
const cookieSession = require("cookie-session");
const passport = require("passport");
require("./db");
require("./config/passport.config");
const AuthRouter = require("./router/auth.routes");

app.set("view engine", "ejs");

app.use(cookieSession({
    maxAge : 24 * 60 * 60 * 1000,
    keys : ["MySuperSecretKey"]
}))

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", AuthRouter)

app.get("/", (req, res) => {
    res.render("home")
})


app.listen(9000, () => console.log("Server started at PORT : 9000"))