const { buildSchema } = require("graphql");
module.exports = buildSchema(`
type Query {
  author(name: String): Author!
  authors: [Author!]!
  posts : [Post!]!
}
type Author {
  id: ID!
  name: String!
  age: Int!
  posts : [Post!]!
}
type Post {
    id: ID!
    title : String!
    body : String!
    published: Boolean!
    author : Author!
}
`);
