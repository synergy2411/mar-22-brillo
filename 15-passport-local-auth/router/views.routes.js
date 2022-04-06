const res = require("express/lib/response");

const router = require("express").Router();

// Register the User - /views/register
router.get("/register", (req, res) => {res.render("register")})

// Login the User - /views/login
router.get("/login", (req, res) => {res.render("login")})

router.get("/profile", (req, res) => {res.render("profile")})

module.exports = router;