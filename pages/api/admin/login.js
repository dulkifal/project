import {db} from "../../../lib/firebase";
const jwt = require("jsonwebtoken");
import { addDoc, collection, getDocs } from "firebase/firestore/lite";

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
  const login = async (db) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    data.map((user) => {
      if (user.name === name && user.password === password) {
        const token = jwt.sign({ name }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.send({ token });
      }
      else {
        res.send({ message: "wrong username or password" });
      }
    }
    );
  }
  login(db);

};
