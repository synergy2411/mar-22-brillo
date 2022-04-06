const { onRegister } = require("../controller/user.controller");

const router = require("express").Router();

router.post("/register", onRegister)

module.exports = router;