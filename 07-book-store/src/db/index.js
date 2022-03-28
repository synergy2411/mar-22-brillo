const {connect} = require("mongoose")

const uri = "mongodb://localhost:27017/brillio-db";

connect(uri)
    .then(conn => console.log("Mongo Connected!"))
    .catch(console.log)
