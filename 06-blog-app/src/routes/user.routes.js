const express = require("express");
const { getUsers, createUser } = require("../controller/user.controller");

const UserRouter = express.Router()

UserRouter.route("/")           // http://localhost:9090/api/users
    .get(getUsers)
    .post(createUser)

module.exports = UserRouter;