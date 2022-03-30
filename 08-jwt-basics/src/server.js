const express = require("express");
require("./db");
const UserModel = require("./model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { response } = require("express");

const app = express();
const SECRET_KEY = "MY_SUPER_SECRET_KEY";

app.use(express.json());
app.use(express.static(__dirname+"/public"));


app.get("/login", (req, res) => {
    res.sendFile(__dirname+"/public/login.html");
})

app.get("/user/profile", (req, res)=>{
    res.sendFile(__dirname+"/public/profile.html")
})

app.post("/user/login", async (req, res) => {
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
                    return res.send({message : "SUCCESS", status : 200, token : token})
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
    const {password} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new UserModel({...req.body, password : hashedPassword})    // {email : "", password :""}
        const createdUser = await user.save()
        return res.send({
            message  :"User created successfully", 
            id : createdUser._id
        })
    }catch(err){
        console.log(err);
        return res.send(err);
    }
})

app.listen(9090, () => console.log("Server running on PORT:  9090"));