const { connect } = require("mongoose");

const URI = "mongodb://localhost:27017/brillio-db"

connect(URI)
    .then(conn => console.log("MongoDB Connected!"))
    .catch(console.log)