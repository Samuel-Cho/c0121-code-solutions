const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const getGrades = require('./getGrades');
const postGrade = require("./postGrade");
const putGrade = require('./putGrade');
const deleteGrade = require('./deleteGrade');

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

app.use(express.json());

app.get('/api/grades', (req, res) => {
  getGrades(req, res, db);
});

app.post('/api/grades', (req, res) => {
  postGrade(req, res, db);
});

app.put('/api/grades/:gradeId', (req, res) => {
  putGrade(req, res, db);
});

app.delete('/api/grades/:gradeId', (req, res) => {
  deleteGrade(req, res, db);
});
