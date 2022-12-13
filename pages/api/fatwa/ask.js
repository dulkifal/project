import validateUser from "../../../lib/validate";
import db from "../../../lib/db";

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
  let valid = validateUser(req, res);
  valid
    ? db.query(`SELECT * FROM questions`, (error, results, fields) => {
        if (error) throw error;
        res.send(results);
      })
    : res.status(401).send("Not authorized");
}

function addAnswer(req, res, db) {
  let valid = validateUser(req, res);
  const { answer, id } = req.body;
  // add answer to the question with id
  valid
    ? db.query(
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
      )
    : res.status(401).send("Not authorized");
}

function deleteQuestion(req, res, db) {
  let valid = validateUser(req, res);

  const { id } = req.body;
  valid
    ? db.query(
        `
    DELETE FROM questions
    WHERE id = ?
    `,
        [id],
        (error, results, fields) => {
          if (error) throw error;
          res.send(results);
        }
      )
    : res.status(401).send("Not authorized");
}
