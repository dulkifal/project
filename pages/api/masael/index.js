import validateUser from "../../../lib/validate";
import db from "../../../lib/db";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";

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
  const getMasael = async (db) => {
    const querySnapshot = await getDocs(collection(db, "masael"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    res.send(data);
  };
  valid ? getMasael(db) : res.status(401).send("Not authorized");
}

function addMasael(req, res, db) {
  const { title, content, lang, writer, published } = req.body;
  const addMasael = async (db) => {
    const docRef = await addDoc(collection(db, "masael"), {
      title,
      content,
      lang,
      writer,
      published,
    });
    res.send({ id: docRef.id });
  };
  addMasael(db);

}

function updateMasael(req, res, db) {
  let valid = validateUser(req, res);
  const { title, content, lang, writer, published, id } = req.body;
  // add answer to the question with id
  const updateMasael = async (db) => {
    const docRef = await addDoc(collection(db, "masael"), {
      title,
      content,
      lang,
      writer,
      published,
      id,
    });
    res.send({ id: docRef.id });
  };
  valid ? updateMasael(db) : res.status(401).send("Not authorized");
}

function deleteMasael(req, res, db) {
  let valid = validateUser(req, res);
  const { id } = req.body;
  // add answer to the question with id
  const deleteMasael = async (db) => {
    const docRef = await addDoc(collection(db, "masael"), {
      id,
    });
    res.send({ id: docRef.id });
  };
  valid ? deleteMasael(db) : res.status(401).send("Not authorized");
}
