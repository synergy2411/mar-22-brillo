const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const rootValue = require("./graphql/resolvers/root.resolvers");
const schema = require("./graphql/schema/schema");
const app = express();

const ensureToken = (req, res, next) => {
  req.token = "My_Secret_Token";
  next();
}

app.use(ensureToken);

// http://localhost:9090/gq
app.use(
  "/gq",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
  })
);

app.listen(9090, () => console.log("GraphQL Server started at PORT : 9090"));
