// const os = require("os");

// console.log("Architecture : ", os.arch());

// console.log("Total Memory : ", os.totalmem());

// console.log("Free Memory : ", os.freemem());

// console.log("Number of CPU's : ", os.cpus().length);

// const path = require("path");

// const url = "http://www.example.com/public/index.html";

// console.log("File : ", path.basename(url))

// console.log("Extension : ", path.extname(url));

// Access the local file system
// const fs = require("fs");

// fs.readFile("./files/demo.md",(err, data) => {
//     if(err){
//         console.log(err);
//     }
//     console.log("ASYNC READ -> ", data.toString());
// })

// const content = fs.readFileSync("./files/demo.md");

// console.log("Sync Data -> ", content.toString());           // Buffer Data

// const fs = require("fs").promises;

// fs.readFile("./files/demo.md")
//     .then(content => {
//         fs.writeFile("./files/new-file.md",content)
//             .then(result => console.log(result))
//             .catch(console.log)
//         // console.log(content.toString());
//     })
//     .catch(console.log)

const http = require("http");
const fs = require("fs").promises;

const books = [{
    isbn : 987654,
    title : "You can win"
}, {
    isbn : 65432,
    title : "The Awesome Book"
}]

const todos = [
    {label : "planting", status : false},
    {label : "insurance", status : true},
]

const requestListener = (request, response) => {

  switch (request.url) {            // /
    case "/image": {                // localhost:9000/image
        fs.readFile("./files/img.jpeg")
        .then(content => {
            response.setHeader("Content-Type", "image/jpeg");
            return response.end(content);
        }).catch(err=>console.log(err))
        break;
    }
    case "/books": {                // localhost:9000/books
      response.setHeader("Content-Type", "application/json");
      return response.end(JSON.stringify(books));
    }
    case "/todos": {                // localhost:9000/todos
      response.setHeader("Content-Type", "application/json");
      return response.end(JSON.stringify(todos));
    }
    default: {                  // localhost:9000 -> HTML file
      response.setHeader("Content-Type", "text/html");
      response.writeHead(200);
      fs.readFile("./files/index.html")
        .then((content) => {
            return response.end(content);
        })
        .catch((err) => {
            return response.end(`<p>Error Occured - ${err}</p>`);
        });
    }
  }
};

const server = http.createServer(requestListener);

server.listen(9000, () => console.log("HTTP Server started at PORT : 9000"));
