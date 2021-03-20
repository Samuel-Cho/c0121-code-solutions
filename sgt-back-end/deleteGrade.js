const deleteGrade = (req, res, db) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ "error": '"gradeId" must be a positive integer' });
    return;
  }
  const sql = `
    delete from "grades"
     where "gradeId" = $1
    returning *
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if(!grade) {
        res.status(404).json({ "error": `Cannot find grade with "gradeId" ${gradeId}` });
      } else {
        res.status(204).end();
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ "error": 'An unexpected error occured.' });
    });
};

module.exports = deleteGrade;
