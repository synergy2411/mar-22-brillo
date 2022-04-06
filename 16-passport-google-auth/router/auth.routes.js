const AuthRouter = require("express").Router()
const passport = require("passport");
const { ensureUser } = require("../middleware/esureUser");

AuthRouter.get("/google/login", passport.authenticate("google", {
    scope : ['profile']
}) ,(req, res) => {
    res.send("Logged-in")
})

AuthRouter.get("/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect("/auth/user/profile")
})

AuthRouter.get("/user/profile", ensureUser, (req, res) => {
    res.render("profile", { 
        user : req.user
    })
})

AuthRouter.get("/logout", (req, res)=>{
    req.logout();
    res.redirect("/")
})

module.exports = AuthRouter