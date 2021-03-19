const getGrades = (req, res, db) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ "error": 'An unexpected error occured.'});
    });
};

module.exports = getGrades;
