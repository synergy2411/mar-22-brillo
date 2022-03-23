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
    const position = allNotes.findIndex(note => note.title === title)
    if(position >= 0){
        console.log("Note already exist. Try again!".red)
    }else{
        allNotes.push({title, body});
        saveNotes(allNotes);
    }
}

const readNote = (title) => {
    const allNotes = loadNotes();
    const foundNote = allNotes.find(note => note.title === title)
    if(foundNote){
        console.log(`Title : ${foundNote.title}`.blue);
        console.log(`Body : ${foundNote.body}`.blue);
    }else{
        console.log(`Note does not exist for title -> ${title}`.red)
    }
}

const removeNote = (title) => {}

const listNote = () => {}

module.exports = {
    addNote, readNote
}