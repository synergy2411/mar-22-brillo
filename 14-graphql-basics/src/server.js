const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const app = express();

const users = [
  { id: "A001", name: "John Doe", age: 32 },
  { id: "A002", name: "Jenny Doe", age: 33 },
  { id: "A003", name: "James Doe", age: 34 },
];

const posts = [
    { id : "p001", title : "Awesome post", body : "I like it", published : true},
    { id : "p002", title : "The Post", body : "I like it very much", published : false},
    { id : "p003", title : "My post", body : "Could be better", published : false},
    { id : "p004", title : "Good Post", body : "Just like that", published : true},
]

// Schema
const schema = buildSchema(`
    type Query {
        author(name : String) : Author!
        authors : [Author!]!
    }
    type Author {
        id : ID!
        name : String!
        age : Int!
    }
`);

// Resolvers
const rootValue = {
  authors: () => users,
  author: (params) => {
      const foundUser = users.find(user => user.name.toLowerCase().includes(params.name.toLowerCase()))
      if(foundUser){
          return foundUser
      }
      return new Error("User not found for name - ", params.name)
  }
};

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
