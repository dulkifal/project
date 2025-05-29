import validateUser from "../../../lib/validate";
import {db} from "../../../lib/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";

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
  const addQuestion = async (db) => {
    const docRef = await addDoc(collection(db, "fatwas"), {
      question,
      name,
      email,
    });
    res.send({ id: docRef.id });
  };
}

function getQuesions(req, res, db) {

  const getQuestions = async (db) => {
    const querySnapshot = await getDocs(collection(db, "fatwas"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    res.send(data);
  };
  getQuestions(db);

  
}

function addAnswer(req, res, db) {
  let valid = validateUser(req, res);
  const { question, answer, id, lang } = req.body;
  const addAnswer = async (db) => {
    const docRef = await addDoc(collection(db, "fatwas"), {
      question,
      answer,
      id,
      lang,
    });
    res.send({ id: docRef.id });
  };
  valid ? addAnswer(db) : res.status(401).send("Not authorized");

}

function deleteQuestion(req, res, db) {
  let valid = validateUser(req, res);

  const { id } = req.body;
  const deleteQuestion = async (db) => {
    const docRef = await addDoc(collection(db, "fatwas"), {
      id,
    });
    res.send({ id: docRef.id });
  };
  valid ? deleteQuestion(db) : res.status(401).send("Not authorized");
}
