const express = require("express");
require("./db");
const PostRouter = require("./routes/post.routes");

const app = express();
app.use(express.json());

app.use("/api/posts", PostRouter)

app.listen(9090, () => console.log("Server started at PORT : 9090"))
