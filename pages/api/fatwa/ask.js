import db from "../../../lip/db";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      addQuestion(req, res, db);
      break;
    case "GET":
      getQuesions(req, res, db);
      break;
    case "PATCH":
      addAnswer(req, res, db);
      break;
      case "DELETE":
        deleteQuestion(req, res, db);
        break;

    // default:
    //   res.setHeader('Allow', ['POST', 'GET']);
    //   res.status(405).end(`Method ${method} Not Allowed`);
  }
}
function addQuestion(req, res, db) {
  const { question, name, email } = req.body;
  db.query(
    `
    INSERT INTO questions (question, name, email)
    VALUES (?, ?, ?)
    `,
    [question, name, email],
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
}

function getQuesions(req, res, db) {
  db.query(`SELECT * FROM questions`, (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}

function addAnswer(req, res, db) {
  const { answer, id } = req.body;
  // add answer to the question with id
  db.query(
    `
    UPDATE questions
    SET answer = ?
    WHERE id = ?
    `,
    [answer, id],
    
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
}

function deleteQuestion(req, res, db) {
  const { id } = req.body;
  db.query(
    `
    DELETE FROM questions
    WHERE id = ?
    `,
    [id],
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
}