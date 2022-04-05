const { buildSchema } = require("graphql");
module.exports = buildSchema(`
type Query {
  author(name: String): Author!
  authors: [Author!]!
  posts : [Post!]!
  comments : [Comment!]!
}
type Author {
  id: ID!
  name: String!
  age: Int!
  posts : [Post!]!
  comments : [Comment!]!
}
type Post {
    id: ID!
    title : String!
    body : String!
    published: Boolean!
    author : Author!
}
type Comment {
  id : ID!
  text : String!
  creator : Author!
}
`);
