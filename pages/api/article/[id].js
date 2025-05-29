import {db} from "../../../lib/firebase";
import { getDoc, doc } from "firebase/firestore/lite";

const handler = (req, res) => {
  const { id } = req.query;
  const { method } = req;
  switch (method) {
    case "GET":
      getArticle(id, res, db);
      break;
    case "POST":
      break;
  }
}

const getArticle = async (id, res, db) => {
  const docRef = doc(db, "article", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    res.send(docSnap.data());
  } else {
    res.send({ message: "No such document!" });
  }
}

export default handler;
