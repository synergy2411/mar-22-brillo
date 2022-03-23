const yargs = require("yargs");
const { addNote } = require("./utils/notes");

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
        const { title, body } = args;
        addNote(title, body)
    }
})

yargs.parse();