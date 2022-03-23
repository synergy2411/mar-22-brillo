const color = require("colors");
const yargs = require("yargs");
const  { square, add, mul } = require("sk-npm-basics")

const { add } = require("./utils")

yargs.command({
    command : "read",
    description : "the read command added"
})
yargs.command({
    command : "write",
    description : "the write command added"
})


console.log(yargs.argv)

// console.log("Success message".green)
// console.log("Error message".red)
// console.log("Warning message".blue)


