const { buildSchema } = require("graphql");
module.exports = buildSchema(`
type Mutation {
  createUser(name : String!, age : Int!) : Author!
}
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
    comments : [Comment!]!
}
type Comment {
  id : ID!
  text : String!
  creator : Author!
  post: Post
}
`);
