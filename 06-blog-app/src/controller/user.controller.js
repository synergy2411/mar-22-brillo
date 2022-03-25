const UserModel = require("../model/user.model");

const getUsers = () => {};

const createUser = async (req, res) => {
  try {
    const user = new UserModel(req.body);
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
