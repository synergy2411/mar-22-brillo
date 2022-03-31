const express = require("express");
const jwt = require("jsonwebtoken");
const { ensureToken } = require("./middlewares/auth");
const UserRouter = require("./routes/user.routes");
const ProtectedRouter = require("./routes/protected.routes");

const app = express();
app.use(express.json());

const MY_SECRET = "This is my Secret key";

app.use("/users", UserRouter);

app.get("/api/protected", ensureToken, (req, res) => {
    jwt.verify(req.token, MY_SECRET, (err, data)=>{
        if(err) {
            console.log(err);
            return res.send(err);
        }
        console.log("DATA -> ", data);
        return res.send({message : "Protected API"})
    })
})


app.listen(9090, () => console.log("App started at PORT : 9090"))