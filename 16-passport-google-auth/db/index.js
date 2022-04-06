const { connect } = require("mongoose");

const mongoURI = "mongodb://localhost:27017/brillio-db"
connect(mongoURI)
    .then(() => console.log("Mongo Connected"))
    .catch(console.log)