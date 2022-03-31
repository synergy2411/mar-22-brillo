const ensureToken = (req, res, next) => {
  const authHeader = req.headers.authorization; // "Bearer  "
  if (authHeader) {
    const token = authHeader.split(" ")[1]; // ["Bearer", "token"]
    if (token) {
      req.token = token;
      return next();
    } else {
      return res.send({ message: "Token not available" });
    }
  } else {
    return res.send({ message: "Auth Header NOT available" });
  }
};

module.exports = {
  ensureToken,
};
