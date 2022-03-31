const { connect } = require("mongoose");

const { mongoURI }= process.env;

connect(mongoURI)
    .then(() => console.log("MongoDB Connected..."))
    .catch(console.log)