const fs = require("fs");
const colors = require("colors");

const loadNotes = (cb) => {
  try {
    const contents = fs.readFileSync("./db/data.json");
    const notesString = contents.toString();
    cb(JSON.parse(notesString));
  } catch (err) {
    return cb([]);
  }
};

// const loadNotes = () => {
//   return new Promise((resolve, reject) => {
//     try {
//       const contents = fs.readFileSync("./db/data.json");
//       // const contents = fs.readFile("./db/data.json", ())
//       // const contents = fs.readFile("./db/data.json")
//       const notesString = contents.toString();
//     //   return JSON.parse(notesString);
//       resolve(JSON.parse(notesString));
//     } catch (err) {
//       return resolve([]);
//     }
//   });
// };

const saveNotes = (notes, flag) => {
  fs.writeFileSync("./db/data.json", JSON.stringify(notes));
  if (flag) {
    console.log("Note Stored".green);
  } else {
    console.log("Note Deleted".green);
  }
};

const addNote = (title, body) => {
  loadNotes((allNotes) => {
    const position = allNotes.findIndex((note) => note.title === title);
    if (position >= 0) {
      console.log("Note already exist. Try again!".red);
    } else {
      allNotes.push({ title, body });
      saveNotes(allNotes, true);
    }
  });

  // console.log(title, body)
  // loadNotes().then(allNotes => {
  //     const position = allNotes.findIndex((note) => note.title === title);
  //       if (position >= 0) {
  //         console.log("Note already exist. Try again!".red);
  //       } else {
  //         allNotes.push({ title, body });
  //         saveNotes(allNotes, true);
  //       }
  // })
  //   const allNotes = loadNotes();
  //   const position = allNotes.findIndex((note) => note.title === title);
  //   if (position >= 0) {
  //     console.log("Note already exist. Try again!".red);
  //   } else {
  //     allNotes.push({ title, body });
  //     saveNotes(allNotes, true);
  //   }
};

const readNote = (title) => {
  const allNotes = loadNotes();
  const foundNote = allNotes.find((note) => note.title === title);
  if (foundNote) {
    console.log(`Title : ${foundNote.title}`.blue);
    console.log(`Body : ${foundNote.body}`.blue);
  } else {
    console.log(`Note does not exist for title -> ${title}`.red);
  }
};

const removeNote = (title) => {
  const allNotes = loadNotes();
  const position = allNotes.findIndex((note) => note.title === title);
  if (position >= 0) {
    allNotes.splice(position, 1);
    saveNotes(allNotes);
  } else {
    console.log("Note does not exist.".red);
  }
};

const listNote = () => {
  const allNotes = loadNotes();
  console.log("Listing All Notes".grey);
  allNotes.forEach((note) => {
    console.log("--------------------".grey);
    console.log(`Title : ${note.title.toUpperCase()}`.blue);
    console.log(`Body : ${note.body}`.blue);
  });
};

module.exports = {
  addNote,
  readNote,
  removeNote,
  listNote,
};
