const queryResolver = require("./query.resolver");
const mutationResolver = require("./mutation.resolver");

module.exports = {
  ...queryResolver,
  ...mutationResolver
};
