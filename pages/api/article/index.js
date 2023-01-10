import validateUser from "../../../lib/validate";
import db from "../../../lib/db";

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      getArticles(req, res, db);
      break;
    case "POST":
      addArticle(req, res, db);
      break;
    case "PATCH":
      updateArticle(req, res, db);
      break;
    case "DELETE":
      deleteArticle(req, res, db);
      break;
    
  }
}

function getArticles(req, res, db) {
  let valid = validateUser(req, res);
  valid
    ? db.query(`SELECT * FROM articles`, (error, results, fields) => {
        if (error) throw error;
        res.send(results);
      })
    :
      db.query(`SELECT * FROM articles WHERE published = 1`, (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    })
}

function addArticle(req, res, db) {
  const { title, content, lang, author, published } = req.body;
  db.query(
    `
    INSERT INTO articles (title, content,lang, author, published)
    VALUES (?, ?,?, ?, ?)
    `,
    [title, content, lang, author, published],
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
}

function updateArticle(req, res, db) {
  let valid = validateUser(req, res);
  const { title, content, lang, author, published, id } = req.body;
  // add answer to the question with id
  valid
    ? db.query(
        `UPDATE articles SET title = ?, content = ?, lang = ?, author = ?, published = ? WHERE id = ?`,
        [title, content, lang, author, published, id],
        (error, results, fields) => {
          if (error) throw error;
          res.send(results);
        }
      )
    : res.send("not authorized");
}

function deleteArticle(req, res, db) {
  let valid = validateUser(req, res);
  const { id } = req.body;
  // add answer to the question with id
  valid
    ? db.query(
        `DELETE FROM articles WHERE id = ?`,
        [id],
        (error, results, fields) => {
          if (error) throw error;
          res.send(results);
        }
      )
    : res.send("not authorized");
}

