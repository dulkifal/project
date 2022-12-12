const mysql = require("mysql2");

export default function handler(req, res) {
  const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

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
