// const os = require("os");

// console.log("Architecture : ", os.arch());

// console.log("Total Memory : ", os.totalmem());

// console.log("Free Memory : ", os.freemem());

// console.log("Number of CPU's : ", os.cpus().length);


// const path = require("path");

// const url = "http://www.example.com/public/index.html";

// console.log("File : ", path.basename(url))

// console.log("Extension : ", path.extname(url));


const fs = require("fs");

fs.readFile("./files/demo.md",(err, data) => {
    if(err){
        console.log(err);
    }
    console.log("ASYNC READ -> ", data.toString());
})


const content = fs.readFileSync("./files/demo.md");

console.log("Sync Data -> ", content.toString());           // Buffer Data
