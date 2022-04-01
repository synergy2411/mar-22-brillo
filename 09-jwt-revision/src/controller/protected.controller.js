const jwt = require("jsonwebtoken");
const UserModel = require("../model/user.model");

const {MY_SECRET} = process.env;

const protectedRoute = (req, res) => {
    jwt.verify(req.token, MY_SECRET, async (err, data)=>{
        if(err) {
            console.log(err);
            return res.send(err);
        }
        const { iat, email, password, id} = data;
        const foundUser = await UserModel.findById(id)
        const { username } = foundUser;
        return res.send({message : `Hello ${username.toUpperCase()}, you are authenticated / authorized User`})
    })
}

module.exports={
    protectedRoute
}