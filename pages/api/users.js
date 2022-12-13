import validateUser from "../../lib/validate";
import db from "../../lib/db";
let valid = validateUser(req, res);

export default function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
   valid ?   getUsers(req, res, db) : res.status(401).json({ message: "Not authorized" });
      break;
    case "POST":
    valid ?  createUser(req, res, db) : res.status(401).json({ message: "Not authorized" });
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

function getUsers(req, res, db) {
  if(valid){
  db.query("SELECT * FROM users", (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
}
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
