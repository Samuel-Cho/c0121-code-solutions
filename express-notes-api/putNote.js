const data = require('./data.json');
const fs = require('fs');
const error1 = { 'error': 'id must be a positive integer' };
const error2 = {'error': 'content is a required field'};
const error3 = {'error': 'An unexpected error occured.'};

const putNote = (req, res) => {
  if (Math.sign(req.params.id) !== 1) {
    res.status(400).json(error1);
  } else if (req.body.hasOwnProperty('content') === false) {
    res.status(400).json(error2);
  } else if (data.notes.hasOwnProperty(req.params.id) === false) {
    const error4 = {
      "error": `cannot find note with id ${req.params.id}`
    };
    res.status(404).json(error4);
  } else {
    data.notes[req.params.id].content = req.body.content;
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
      if (err) {
        res.status(500).json(error3);
      } else {
        res.status(200).json(data.notes[req.params.id]);
      }
    });
  }
};

module.exports = putNote;
