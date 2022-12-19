import db from "../../../lib/db";
import validateUser from "../../../lib/validate";


export default async function handler(req, res) {
  const {method} = req;
  switch (method) {
    case "GET":
      getSearchedFatwas(req, res);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

function getSearchedFatwas(req, res) {
  const {term} = req.query;
  let valid = validateUser(req, res);
  valid ? 

db.query(
  `SELECT * FROM questions WHERE (question LIKE '%${term}%' OR answer LIKE '%${term}%') AND answer IS NOT NULL`,
  (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  }
  
           
)
:
db.query(
  `
  SELECT * FROM questions WHERE (question LIKE '%${term}%' OR answer LIKE '%${term}%') AND answer IS NOT NULL
  `,
  (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  }
)

  
}

