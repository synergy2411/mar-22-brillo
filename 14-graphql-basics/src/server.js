const express = require("express");
const { buildSchema } = require("graphql")
const { graphqlHTTP } = require("express-graphql")
const app = express();

const schema = buildSchema(`

`)

const rootValue = {

}

// http://localhost:9090/gq
app.use("/gq", graphqlHTTP({
    schema: schema,
    rootValue : rootValue,
    graphiql : true
}))

// http://localhost:9090
app.listen(9090, () => console.log("GraphQL Server started at PORT : 9090"))