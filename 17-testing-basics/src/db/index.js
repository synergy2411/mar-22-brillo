const { connect } = require("mongoose");

const uri = "mongodb://localhost:27017/test-db"

connect(uri)
    .then(() => console.log("Connected"))
    .catch(console.log)