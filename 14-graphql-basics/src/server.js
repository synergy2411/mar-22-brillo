const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const rootValue = require("./graphql/resolvers/root.resolvers");
const schema = require("./graphql/schema/schema");
const app = express();

// http://localhost:9090/gq
app.use(
  "/gq",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

app.listen(9090, () => console.log("GraphQL Server started at PORT : 9090"));
