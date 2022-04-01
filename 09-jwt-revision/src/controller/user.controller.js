const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserModel = require("../model/user.model");

const {MY_SECRET} = process.env;

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try{
    const foundUser = await UserModel.findOne({email})
    if(foundUser){
      const isMatch = await bcrypt.compare(password, foundUser.password);
      if(isMatch){
        try{
          const token = await jwt.sign({email, password, id: foundUser._id}, MY_SECRET);
          return res.send({token, message : "Logged-in successfully"})
        }catch(err){
          console.log(err);
          return res.send({message : "Error while generating the token"});
        }
      }else{
        return res.send({message : "Password does not match"})
      }
    }else{
      return res.send({message : "User NOT found"})
    }
  }catch(err){
    console.log(err);
    return res.send(err);
  }
};

const userRegister = async(req, res) => {
  const { email, username , password , age} = req.body;
  const foundUser = await UserModel.findOne({email})
  if(!foundUser){
    try{
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new UserModel({username, email, age, password : hashedPassword})
      const createdUser = await user.save()
      return res.send({message : "User Registered", id : createdUser._id})
    }catch(err){
      return res.send(err)
    }
  }else{
    return res.send({message : "Email already exists. Try Again!"})
  }
}

module.exports = {
  userLogin, userRegister
};
