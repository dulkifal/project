import db from "../../lip/db";

export default function handler(req, res) {


  const { method } = req;
  switch (method) {
    case "GET":
      getUsers(req, res, db);
      break;
    case "POST":
      createUser(req, res, db);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

function getUsers(req, res, db) {
  db.query("SELECT * FROM users", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}

function createUser(req, res, db) {
  const { name, password } = req.body;
  db.query(
    "INSERT INTO users SET ?",
    { name, password },
    (error, results, fields) => {
      if (error) throw error;
      res.send(results);
    }
  );
}
