const { Stream } = require("stream");
const { EventEmitter } = require("events");
const fs = require("fs");

const readable = fs.createReadStream("./events-basics.js")
const writable = fs.createWriteStream("./new-file-two.md")


readable.pipe(writable)


// request.pipe(writable);         // upload server
// readable.pipe(response);        // download server


readable.on("data", (chunk) => {
    console.log(chunk);    
    writable.write(chunk);     
})

// console.log(new Stream.Readable() instanceof Stream);
// console.log(new Stream.Writable() instanceof Stream);

// console.log(new Stream() instanceof EventEmitter);