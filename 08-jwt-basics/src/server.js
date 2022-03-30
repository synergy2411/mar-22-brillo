const express = require("express");
require("./db");
const UserModel = require("./model/user.model");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());
app.use(express.static(__dirname+"/public"));

app.get("/login", (req, res) => {
    res.sendFile(__dirname+"/public/login.html");
})

app.post("/user/login", async (req, res) => {
    const { email, password } = req.body;
    try{
        const foundUser = await UserModel.findOne({email : email});
        if(foundUser){
            const isMatch = await bcrypt.compare(password, foundUser.password);
            if(isMatch){
                return res.send({message : "User is Authenticated"})
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