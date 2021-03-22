const gradeProperties = ['name', 'course', 'score'];

const putGrade = (req, res, db) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({"error": '"gradeId" must be a positive integer'});
    return;
  }
  for (let i = 0; i < gradeProperties.length; i++) {
    const error1 = { "error": `${gradeProperties[i]} field is a required field` };
    if (req.body.hasOwnProperty(gradeProperties[i]) === false) {
      res.status(400).json(error1);
      return;
    }
  }
  if (Math.sign(req.body.score) !== 1) {
    const error2 = { "error": "score must be a positive integer" };
    res.status(400).json(error2);
    return;
  } else if (req.body.score < 1 || req.body.score > 100) {
    const error3 = { "error": "score must be between 1 and 100" };
    res.status(400).json(error3);
    return;
  }
  const sql = `
    update "grades"
       set "name" = $2,
           "course" = $3,
           "score" = $4
     where "gradeId" = $1
    returning *
  `;
  const params = [gradeId, req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({"error": `Cannot find grade with "gradeId" ${gradeId}`});
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ "error": 'An unexpected error occured.' });
    });
};

module.exports = putGrade;
