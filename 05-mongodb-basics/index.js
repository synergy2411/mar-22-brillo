const { MongoClient } = require("mongodb");

const MONGO_URI ="mongodb://localhost:27017";

const client = new MongoClient(MONGO_URI)

client.connect()
    .then(conn => {
        console.log("Mongo Connected")
        const db = client.db("brillio-db")
        const postsCollection = db.collection("posts")

        
        // READ
        postsCollection.find().toArray().then(documents =>{console.log(documents)}).catch(console.log)
        
        // CREATE
        // postsCollection.insertOne({title : "grocery", body : "to buy some pulses"})
        //     .then(result => {
        //         console.log(result)
        //     }).catch(console.log)

    }).catch(console.log)


    // nodemon index.js