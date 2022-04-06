const router = require("express").Router();

// Register the User - /views/register
router.get("/register", (req, res) => {res.render("register")})

// Login the User - /views/login
router.get("/login", (req, res) => {res.render("login")})

module.exports = router;