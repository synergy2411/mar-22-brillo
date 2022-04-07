const express = require("express");
const { getPosts, onLogin } = require("../controller/post.controller");
const { ensureToken } = require("../middleware/ensureToken");

const router = express.Router();

// http://localhost:9090/views/welcome
router.get("/welcome", getPosts)

// http://localhost:9090/views/login
router.get("/login", onLogin)

module.exports = router;