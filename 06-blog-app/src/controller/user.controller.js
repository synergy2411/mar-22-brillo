const UserModel = require("../model/user.model");
const bcrypt = require("bcryptjs");

const getUsers = () => {};

const onUserLogin = async (req, res) => {
    const {email, password} = req.body;
    try{
        const foundUser = await UserModel.findOne({email})
        if(foundUser){
            // const isMatch = await bcrypt.compare(password, foundUser.password)
            if(UserModel.verifyPassword(password)){
                return res.send({message : "Authenticated"})
            }else{
                return res.send({message : "Authentication Failed"})
            }
        }else{
            return res.send({message : "User NOT found"})
        }
    }catch(err) {
        console.log(err)
        return res.send({err})
    }
};

const createUser = async (req, res) => {
  try {
    // const { password } = req.body;
    // const hashedPassword = await bcrypt.hash(password, 12);
    // const user = new UserModel({ ...req.body, password: hashedPassword });
    const user = new UserModel(req.body)
    user.logger();
    const createdUser = await user.save();
    return res.send(createdUser);
  } catch (err) {
    return res.send({ err });
  }
};

module.exports = {
  getUsers,
  createUser,
  onUserLogin
};
