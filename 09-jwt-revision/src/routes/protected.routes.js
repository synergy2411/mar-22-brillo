const express = require("express");
const { protectedRoute } = require("../controller/protected.controller");
const { ensureToken } = require("../middlewares/auth");

const router = express.Router();

// Need to define routes here
// http://localhost:9090/api
router.get("/protected", ensureToken ,protectedRoute)

module.exports = router;