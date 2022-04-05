const { buildSchema } = require("graphql");
module.exports = buildSchema(`
type Mutation {
  createUser(data : CreateUserInput) : Author!
  createPost(data : CreatePostInput) : Post!
  createComment(data : CreateCommentInput) : Comment!
  deleteComment(id : ID!) : Comment!
  deletePost(id : ID!) : Post!
  updateUser(id : ID!, data : UpdateUserInput ) : Author!
}
input UpdateUserInput{
  name : String
  age : Int
}
input CreateCommentInput{
  text : String!
  postId : ID!
  authorId : ID!
}
input CreatePostInput{
  title : String!
  body : String!
  authorId : ID!
}
input CreateUserInput {
  name : String!
  age : Int!
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
