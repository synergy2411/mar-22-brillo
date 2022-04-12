const { connect } = require("mongoose");

// const uri = "mongodb://localhost:27017/test-db"
const uri = "mongodb+srv://brillian:JZyjrzkyrNxmKavG@cluster0.e9xsq.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)