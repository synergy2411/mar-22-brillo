let users = [
  { id: "A001", name: "John Doe", age: 32 },
  { id: "A002", name: "Jenny Doe", age: 33 },
  { id: "A003", name: "James Doe", age: 34 },
];

let posts = [
  {
    id: "P001",
    title: "Awesome post",
    body: "I like it",
    published: true,
    author: "A001",
  },
  {
    id: "P002",
    title: "The Post",
    body: "I like it very much",
    published: false,
    author: "A002",
  },
  {
    id: "P003",
    title: "My post",
    body: "Could be better",
    published: false,
    author: "A001",
  },
  {
    id: "P004",
    title: "Good Post",
    body: "Just like that",
    published: true,
    author: "A003",
  },
];

let comments = [
  { id: "C101", text: "I Loved it", creator: "A003", post: "P001" },
  { id: "C102", text: "I liked it", creator: "A003", post: "P002" },
  { id: "C103", text: "it was nice", creator: "A002", post: "P001" },
  { id: "C104", text: "some awesome comment", creator: "A001", post: "P003" },
];

module.exports = { users, posts, comments };
