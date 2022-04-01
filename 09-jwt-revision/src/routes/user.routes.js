const express = require("express");
const { userLogin, userRegister } = require("../controller/user.controller");

const router = express.Router();

// Need to define routes here
// http://localhost:9090/users/login - POST
router.post("/login", userLogin)

// http://localhost:9090/users/register - POST
router.post("/register", userRegister )

module.exports = router;