import validateUser from "../../lib/validate";
import {db} from "../../lib/firebase";
import { getDocs, collection } from "firebase/firestore/lite";

export default function handler(req, res) {
  let valid = validateUser(req, res);

  const { method } = req;
  switch (method) {
    case "GET":
      valid
        ? getUsers(req, res, db)
        : res.status(401).json({ message: "Not authorized" });
      break;
    case "POST":
      valid
        ? createUser(req, res, db)
        : res.status(401).json({ message: "Not authorized" });
      break;
    case "DELETE":
      valid
        ? deleteUser(req, res, db)
        : res.status(401).json({ message: "Not authorized" });
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

function getUsers(req, res, db) {
 const getUsers = async (db) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    res.send(data);
  }
  valid ? getUsers(db) : res.status(401).send("Not authorized");
}

function createUser(req, res, db) {
  const { name, password } = req.body;

  const createUser = async (db) => {
    const docRef = await addDoc(collection(db, "users"), {
      name,
      password,
    });
    res.send({ id: docRef.id });
  };
  createUser(db);
}

function deleteUser(req, res, db) {
  const { id } = req.body;

  const deleteUser = async (db) => {
    await deleteDoc(doc(db, "users", id));
    res.send({ id });
  };
  deleteUser(db);
}
