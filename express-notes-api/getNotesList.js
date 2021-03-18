let data = require('./data.json');
const fs = require('fs');

const getNotesList = (req, res) => {
  const notesArray = [];
  for (let i in data.notes) {
    notesArray.push(data.notes[i]);
  }
  res.status(200).json(notesArray);
};

module.exports = getNotesList;
