const { connect } = require("mongoose");

// const { mongoURI }= process.env;

const mongoURI = "mongodb://localhost:27017/brillio-db";

connect(mongoURI)
    .then(() => console.log("MongoDB Connected..."))
    .catch(console.log)