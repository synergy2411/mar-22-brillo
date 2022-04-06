const UserModel = require("../model/user.model");

const onRegister = async (req, res ) => {
    try{
        const newUser = new UserModel(req.body);
        const createdUser = await newUser.save();
        return res.send(createdUser)
    }catch(err){
        return res.send(err)
    }
}

const onLogin = async (req, res ) => {}

module.exports = { onRegister, onLogin }

