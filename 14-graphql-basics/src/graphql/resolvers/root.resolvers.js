const { users } = require("../../db/data");
module.exports = {
  authors: () => users,
  author: (params) => {
    const foundUser = users.find((user) =>
      user.name.toLowerCase().includes(params.name.toLowerCase())
    );
    if (foundUser) {
      return foundUser;
    }
    return new Error("User not found for name - " + params.name);
  },
};
