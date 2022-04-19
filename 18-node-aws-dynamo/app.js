const { DynamoDB, config } = require("aws-sdk");

config.update({
    region : "ap-south-1",
    accessKeyId : "YourAccessKeyID",
    secretAccessKey : "YourSecretAccessKey"
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
