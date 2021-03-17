let data = require('./data.json');
const fs = require('fs');
const error1 = {'error': 'id must be a positive integer'};
const error2 = {'error': 'An unexpected error occured.'};

const deleteNote = (req, res) => {
  if (Math.sign(req.params.id) !== 1) {
    res.status(400).json(error1);
  } else {
    if (data.notes.hasOwnProperty(req.params.id)) {
      delete data.notes[req.params.id];
      fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
        if (err) {
          res.status(500).json(error2);
        }
        res.status(204).end();
      });
    } else {
      const error2 = {
        "error": `cannot find note with id ${req.params.id}`
      };
      res.status(404).json(error2);
    }
  }
};

module.exports = deleteNote;
