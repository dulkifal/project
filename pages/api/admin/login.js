import db from "../../../lip/db";
const jwt = require("jsonwebtoken");

export default function handleLogin(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      break;
    case "POST":
      passJWT(req, res, db);
  }
}

const passJWT = (req, res, db) => {
  const { name, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE name = ? AND password = ?",
    [name, password],
    (error, results, fields) => {
      if (error) res.status(500).send(error);
      if (results.length > 0) {
        const token = jwt.sign({ name }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.send({ token });
      } else {
        res.status(401).send("Invalid username or password");
      }
    }
  );
};
