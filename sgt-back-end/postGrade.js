const gradeProperties = ['name', 'course', 'score'];

const postGrade = (req, res, db) => {
  for (let i = 0; i < gradeProperties.length; i++) {
    const error1 = { "error": `${gradeProperties[i]} field is a required field`};
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
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({"error": 'An unexpected error occured.'});
    });
};

module.exports = postGrade;
