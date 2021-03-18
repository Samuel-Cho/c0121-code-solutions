let data = require('./data.json');
const fs = require('fs');
const error1 = {'error': 'content is a required field'};
const error2 = {'error': 'An unexpected error occured.'};

const postNote = (req, res) => {
  if (req.body.hasOwnProperty('content') === false) {
    res.status(400).json(error1);
  } else {
    req.body.id = data.nextId;
    data.notes[data.nextId] = req.body;
    data.nextId++
    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', (err) => {
      if (err) {
        res.status(500).json(error2);
      } else {
        res.status(201).json(req.body);
      }
    });
  }
};

module.exports = postNote;
