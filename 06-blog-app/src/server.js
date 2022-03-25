const express = require("express");
require("./db");
const PostRouter = require("./routes/post.routes");
const UserRouter = require("./routes/user.routes");

const app = express();
app.use(express.json());

app.use("/api/posts", PostRouter)
app.use("/api/users", UserRouter)


app.listen(9090, () => console.log("Server started at PORT : 9090"))
