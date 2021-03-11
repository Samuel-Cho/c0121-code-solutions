const fs = require('fs');

const remove = (dataModel, id) => {
  delete dataModel.notes[id];
  fs.writeFile('data.json', JSON.stringify(dataModel, null, 2), 'utf8', (err) => {
    if (err) throw err;
  });
};

module.exports = remove;
