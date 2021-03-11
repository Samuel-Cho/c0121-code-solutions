const fs = require('fs');

const update = (dataModel, id, string) => {
  dataModel.notes[id] = string;
  fs.writeFile('data.json', JSON.stringify(dataModel, null, 2), 'utf8', (err) => {
    if (err) throw err;
  });
};

module.exports = update;
