const fs = require('fs');

const create = (dataModel, string) => {
  dataModel.notes[dataModel.nextId] = string;
  dataModel.nextId++;
  fs.writeFile('data.json', JSON.stringify(dataModel, null, 2), 'utf8', (err) => {
    if (err) throw err;
  });
};

module.exports = create;
