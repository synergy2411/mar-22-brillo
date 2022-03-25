const express = require("express");
const { getUsers, createUser, onUserLogin } = require("../controller/user.controller");

const UserRouter = express.Router()

UserRouter.route("/")           // http://localhost:9090/api/users
    .get(getUsers)
    .post(createUser)
UserRouter.route("/login")                                // http://localhost:9090/api/users/login -> POST
    .post(onUserLogin)
module.exports = UserRouter;