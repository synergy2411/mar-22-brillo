const express = require("express");
require("./db");
const UserModel = require("./model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const SECRET_KEY = "MY_SUPER_SECRET_KEY";

app.use(express.json());
app.use(express.static(__dirname+"/public"));


app.get("/login", (req, res) => {
    res.sendFile(__dirname+"/public/login.html");
})

const ensureToken = (req, res, next) => {
    const authHeader = req.headers.authorization;            // "Bearer token"
    if(authHeader){
        const token = authHeader.split(' ')[1]                                // ["Bearer", "token"]
        if(token){
            req.token = token;
            return next();
        }
        return res.send({message : "Token NOT found"})
    }
    return res.send({message : "Auth Header not present"})
}

app.get("/user/profile", ensureToken, (req, res)=>{
    jwt.verify(req.token, SECRET_KEY, (err, decode)=>{
        if(err){
            return res.send(err)
        }
        const {email} = decode;
        return res.send({message : `Hello ${email}, You are visiting profile page`})
    })
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try{
        const foundUser = await UserModel.findOne({email : email});
        if(foundUser){
            const isMatch = await bcrypt.compare(password, foundUser.password);
            if(isMatch){
                try{
                    const token = await jwt.sign({
                        id : foundUser._id,
                        email : email
                    }, SECRET_KEY)
                    return res.send({message : "SUCCESS", token : token}).status(200)
                }catch(err){
                    console.log(err);
                    return res.send(err)
                }
            }else{
                return res.send({message : "Bad Credentials"})
            }
        }else{
            return res.send({message : "User Not found"})
        }
    }catch(err){
        console.log(err)
        return res.send(err)
    }
})

app.post("/signup", async (req, res) => {
    const {email, password} = req.body;
    try{
        const foundUser = await UserModel.findOne({email});
        if(foundUser){
            return res.send({message : "Email already exists"})
        }else{
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new UserModel({...req.body, password : hashedPassword})    // {email : "", password :""}
            const createdUser = await user.save()
            return res.send({
                message  :"User created successfully", 
                id : createdUser._id
            })
        }
    }catch(err){
        console.log(err);
        return res.send(err);
    }
})

app.listen(9090, () => console.log("Server running on PORT:  9090"));