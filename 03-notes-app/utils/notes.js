const fs = require("fs");
const colors = require("colors");

const loadNotes = () => {
    try{
        const contents = fs.readFileSync("./db/data.json")
        const notesString = contents.toString()
        return JSON.parse(notesString);
    }catch(err){
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("./db/data.json", JSON.stringify(notes))
    console.log("Note Stored".green);
}

const addNote = (title, body) => {
    const allNotes = loadNotes();
    allNotes.push({title, body});
    saveNotes(allNotes);
}

module.exports = {
    addNote
}