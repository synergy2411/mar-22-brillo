const UserModel = require("../model/user.model");
const bcrypt = require("bcryptjs");

const getUsers = () => {};

const createUser = async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new UserModel({ ...req.body, password: hashedPassword });
    const createdUser = await user.save();
    return res.send(createdUser);
  } catch (err) {
    return res.send({ err });
  }
};

module.exports = {
  getUsers,
  createUser,
};
