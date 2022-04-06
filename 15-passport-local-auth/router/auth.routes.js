const { onRegister, onLogin } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/register", onRegister)
router.post("/login", onLogin)

module.exports = router;