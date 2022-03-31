const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const MY_SECRET = "This is my Secret key";

app.post("/user/login", (req, res) => {
    const { username, password } = req.body;
    if(username && password){           // assuming user is authenticated user
        const token = jwt.sign({ username, password }, MY_SECRET)
        return res.send({token : token, message : "Logged-in successfully"})
    }else{
        return res.send({message : "Bad Credentials"})
    }
})

const ensureToken = (req, res, next) => {
    const authHeader = req.headers.authorization;           // "Bearer  "
    if(authHeader){
        const token = authHeader.split(' ')[1]           // ["Bearer", "token"]
        if(token){
            req.token = token;
            return next();
        }else{
            return res.send({message : "Token not available"})
        }
    }else{
        return res.send({message : "Auth Header NOT available"})
    }
}

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