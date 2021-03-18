let data = require('./data.json');
const error1 = {
  "error": "id must be a positive integer"
};

const getNotesById = (req, res) => {
  if (Math.sign(req.params.id) !== 1) {
    res.status(400).json(error1);
  } else {
    if (data.notes.hasOwnProperty(req.params.id)) {
      res.status(200).json(data.notes[req.params.id]);
    } else {
      const error2 = {
        "error": `cannot find note with id ${req.params.id}`
      };
      res.status(404).json(error2);
    }
  }
}
module.exports = getNotesById;
