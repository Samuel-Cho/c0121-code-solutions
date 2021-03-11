const fs = require('fs');

const read = (dataModel) => {
  for (let id in dataModel.notes) {
    console.log(`${id}: ${dataModel.notes[id]}`);
  }
};

module.exports = read;
