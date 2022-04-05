const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const rootValue = require("./graphql/resolvers/root.resolvers");
// const query = require("./graphql/schema/schema.graphql");
const app = express();

// Schema
const schema = buildSchema(`
type Query {
  author(name: String): Author!
  authors: [Author!]!
}
type Author {
  id: ID!
  name: String!
  age: Int!
}

`);

// http://localhost:9090/gq
app.use(
  "/gq",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

// http://localhost:9090
app.listen(9090, () => console.log("GraphQL Server started at PORT : 9090"));
