const express = require('express');
const app = express();
const getNotesList = require('./getNotesList');
const getNotesById = require('./getNotesById');
const postNote = require('./postNote');
const deleteNote = require('./deleteNote');
const putNote = require('./putNote');

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

app.use(express.json());

app.get('/api/notes', (req, res) => {
  getNotesList(req, res);
});

app.get('/api/notes/:id', (req, res) => {
  getNotesById(req, res);
});

app.post('/api/notes', (req, res) => {
  postNote(req, res);
});

app.delete('/api/notes/:id', (req, res) => {
  deleteNote(req, res);
});

app.put('/api/notes/:id', (req, res) => {
  putNote(req, res);
});
