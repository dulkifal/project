import db from "../../../lib/db";

const handler =  (req, res) => {
  const { id } = req.query;
    db.query(
    `
    SELECT * FROM questions WHERE id = ?
    `,
    [id]
  ,(error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });

  
};

  


  export default handler