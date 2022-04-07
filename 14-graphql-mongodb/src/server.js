const express = require("express");
const { graphqlHTTP } = require("express-graphql")
const app = express();
require("./db");
const rootValue = require("./graphql/resolvers/root.resolvers")
const schema = require("./graphql/schema/schema")


// http://localhost:9090/gq
app.use("/gq", graphqlHTTP({
    schema: schema,
    rootValue : rootValue,
    graphiql : true
}))

// http://localhost:9090
app.listen(9090, () => console.log("GraphQL Server started at PORT : 9090"))
