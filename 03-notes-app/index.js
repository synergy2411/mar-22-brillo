const yargs = require("yargs");
const { addNote, readNote, removeNote, listNote } = require("./utils/notes");

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

yargs.command({
    command : "read",
    description : "to read single note",
    builder : {
        title : {
            type : "string",
            description : "title to read one note",
            demandOption : true
        }
    },
    handler : args => {
        const { title } = args;
        readNote(title);
    } 
})

yargs.command({
    command : "remove",
    description : "to remove single note",
    builder : {
        title : {
            type : "string",
            description : "title to remove one note",
            demandOption : true
        }
    },
    handler : args => {
        const { title } = args;
        removeNote(title);
    } 
})

yargs.command({
    command : "list",
    description : "to list down all notes",
    handler : () => listNote()
})

yargs.parse();