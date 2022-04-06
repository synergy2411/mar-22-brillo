const passport = require("passport");
const { ensureUser } = require("../middleware/ensureUser.middleware");
const router = require("express").Router();

// Register the User - /views/register
router.get("/register", (req, res) => {res.render("register")})

// Login the User - /views/login
router.get("/login", (req, res) => {res.render("login")})

// After Login - /views/profile
router.get("/profile", ensureUser, (req, res) => {
    res.render("profile", {
        user : req.user         // {username, password}
    });
})

module.exports = router;