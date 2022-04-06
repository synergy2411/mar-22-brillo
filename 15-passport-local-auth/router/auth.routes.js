const { onRegister, onLogin } = require("../controller/user.controller");
const passport = require("passport");

const router = require("express").Router();

router.get("/logout", (req, res) => {
    req.logOut();                   // emplty the cookie session
    res.render("login")
})
router.post("/register", onRegister)
router.post("/login", passport.authenticate("local", {
    failureRedirect : "/views/login",
    successRedirect : "/views/profile" 
}))

module.exports = router;