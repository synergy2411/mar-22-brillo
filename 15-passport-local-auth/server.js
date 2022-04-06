const express = require("express");
require("./db");
const ViewRouter = require("./router/views.routes");
const AuthRouter = require("./router/auth.routes");

const app = express()

app.use(express.urlencoded({extended : false}));            // Populate the Request body from Form Data

app.set("view engine", "ejs")

app.use("/auth", AuthRouter)
app.use("/views", ViewRouter)

app.get("/", (req, res) => {
    res.render("home")
})

app.listen(9000, () => console.log("Servert started at PORT : 9000"))