import validateUser from "../../../lib/validate";
import {db} from "../../../lib/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";


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
  const getArticles = async (db) => {
    const querySnapshot = await getDocs(collection(db, "article"));
    const data = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(), // Get the document data
        id: doc.id, // Get the document ID
      }}
    );
    res.send(data);
  };
  getArticles(db);
}

function addArticle(req, res, db) {
  const { title, content, lang, author, published } = req.body;
  const addArticle = async (db) => {
    const docRef = await addDoc(collection(db, "article"), {
      title: title,
      content: content,
      lang: lang,
      author: author,
      published: published,
    });
    res.send(docRef);
  }
  addArticle(db);

 
}

function updateArticle(req, res, db) {
  let valid = validateUser(req, res);
  const { title, content, lang, author, published, id } = req.body;
 
   const updateArticle = async (db) => {
    const docRef = await addDoc(collection(db, "article"), {
      title: title,
      content: content,
      lang: lang,
      author: author,
      published: published,
      id: id
    });
    res.send(docRef);
  }
  valid ? updateArticle(db) : res.send("not authorized");

  
}

function deleteArticle(req, res, db) {
  let valid = validateUser(req, res);
  const { id } = req.body;
  const deleteArticle = async (db) => {
    const docRef = await addDoc(collection(db, "article"), {
      id: id
    });
    res.send(docRef);
  }
  valid ? deleteArticle(db) : res.send("not authorized");
}

