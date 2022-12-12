import db from "../../../lip/db"

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case 'POST':
  addQuestion(req, res, db);
      break;
      case 'GET':
       getQuesions(req, res, db);
        
    // default:
    //   res.setHeader('Allow', ['POST', 'GET']);
    //   res.status(405).end(`Method ${method} Not Allowed`);

}

}
async function addQuestion(req, res, db) {
  const { question, name, email } = req.body;
  await db.query(
    `
    INSERT INTO questions (question, name, email)
    VALUES (?, ?, ?)
    `,
    [question, name, email], (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  )
  
}

 function getQuesions(req, res, db) {
    db.query(
          `SELECT * FROM questions`,(error, results, fields) => {
            if (error) throw error;
            res.send(results);
          }
        );
       
}
