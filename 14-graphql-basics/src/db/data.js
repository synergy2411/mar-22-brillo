const users = [
    { id: "A001", name: "John Doe", age: 32 },
    { id: "A002", name: "Jenny Doe", age: 33 },
    { id: "A003", name: "James Doe", age: 34 },
  ];
  
  const posts = [
    { id: "p001", title: "Awesome post", body: "I like it", published: true },
    {
      id: "p002",
      title: "The Post",
      body: "I like it very much",
      published: false,
    },
    { id: "p003", title: "My post", body: "Could be better", published: false },
    { id: "p004", title: "Good Post", body: "Just like that", published: true },
  ];

  module.exports = { users, posts }