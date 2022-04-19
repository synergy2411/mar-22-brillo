const { DynamoDB, config } = require("aws-sdk");

config.update({
    region : "ap-south-1",
    accessKeyId : "GIVE_YOUR_ACCESS_KEY_ID_HERE",
    secretAccessKey : "GIVE_YOUR_SECRET_ACCESS_KEY_HERE"
})

const docClient = new DynamoDB.DocumentClient()

docClient.put({
    TableName : "courses",
    Item : {
        courseId : "C103",
        courseName : "Awesome NodeJS",
        courseDuration : 40
    }
}, (err, data) => {
    if(err) console.log(err)
    console.log("DATA -> ", data)
})

// docClient.get({
//     TableName : 'courses',
//     Key : {
//         courseId : "C101"
//     }
// }, (err, data) => {
//     if(err) console.log(err)
//     console.log("DATA ->", data)
// })