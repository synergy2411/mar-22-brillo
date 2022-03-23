const yargs = require("yargs");

yargs.command({
    command : "add",
    description : "to add new note",
    builder : {
        title : {
            type : "string",
            description : "title to add new note",
            demandOption : true
        },
        body: {
            type : "string",
            description : "body to add new note",
            demandOption : true
        }
    },
    handler : (args) => {
        console.log("ARGUMENTS : ", args)
    }
})

yargs.parse();