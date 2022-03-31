const jwt = require("jsonwebtoken");
const {MY_SECRET} = process.env;

console.log("Secret Key -> ", MY_SECRET)

const userLogin = (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    // assuming user is authenticated user
    const token = jwt.sign({ username, password }, MY_SECRET);
    return res.send({ token: token, message: "Logged-in successfully" });
  } else {
    return res.send({ message: "Bad Credentials" });
  }
};

module.exports = {
  userLogin,
};
