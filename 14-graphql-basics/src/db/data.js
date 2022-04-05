const users = [
  { id: "A001", name: "John Doe", age: 32 },
  { id: "A002", name: "Jenny Doe", age: 33 },
  { id: "A003", name: "James Doe", age: 34 },
];

const posts = [
  { id: "p001", title: "Awesome post", body: "I like it", published: true, author : "A001" },
  {
    id: "p002",
    title: "The Post",
    body: "I like it very much",
    published: false,
    author : "A002"
  },
  { id: "p003", title: "My post", body: "Could be better", published: false, author : "A001" },
  { id: "p004", title: "Good Post", body: "Just like that", published: true, author : "A003" },
];

module.exports = { users, posts };
