import validateUser from "../../../lib/validate";
import db from "../../../lib/db";

export default async function handler(req, res) {
  const {method } = req;
  switch (method) {
    case "GET":
      getMasael(req, res, db);
      break;
    case "POST":
      addMasael(req, res, db);
      break;
    case "PATCH":
      updateMasael(req, res, db);

      break;
    case "DELETE":
      deleteMasael(req, res, db);

      break;

  }
}


function getMasael(req, res, db) {
  let valid = validateUser(req, res);
  valid
    ? db.query(`SELECT * FROM masael`, (error, results, fields) => {
        if (error) throw error;
        res.send(results);
      })
    :
      db.query(`SELECT * FROM masael WHERE published = 1`, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    })
}

function addMasael(req, res, db) {
  const { title, content, lang, author, published } = req.body;
  db.query(
    `
    INSERT INTO masael (title, content,lang, author, published)
    VALUES (?, ?,?, ?, ?)
    `,
    [title, content, lang, author, published],
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
}

function updateMasael(req, res, db) {
  let valid = validateUser(req, res);
  const { title, content, lang, author, published, id } = req.body;
  // add answer to the question with id
  valid
    ? db.query(
        `UPDATE masael SET title = ?, content = ?, lang = ?, author = ?, published = ? WHERE id = ?`,
        [title, content, lang, author, published, id],
        (error, results, fields) => {
          if (error) throw error;
          res.send(results);
        }
      )
    : res.send("not valid");
}

function deleteMasael(req, res, db) {
  let valid = validateUser(req, res);
  const { id } = req.body;
  // add answer to the question with id
  valid
    ? db.query(
        `DELETE FROM masael WHERE id = ?`,
        [id],
        (error, results, fields) => {
          if (error) throw error;
          res.send(results);
        }
      )
    : res.send("not valid");
}
