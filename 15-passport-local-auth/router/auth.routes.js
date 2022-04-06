const { onRegister, onLogin } = require("../controller/user.controller");
const passport = require("passport");

const router = require("express").Router();

router.post("/register", onRegister)
router.post("/login", passport.authenticate("local", {
    failureRedirect : "/views/login",
    successRedirect : "/views/profile" 
}))

module.exports = router;