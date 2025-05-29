import {db} from "../../../lib/firebase";
import validateUser from "../../../lib/validate";


export default async function handler(req, res) {
  const {method} = req;
  switch (method) {
    case "GET":
      getSearchedFatwas(req, res);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

function getSearchedFatwas(req, res) {
  const {term} = req.query;
  let valid = validateUser(req, res);
 const getQuestions = async (db) => {
    const querySnapshot = await getDocs(collection(db, "fatwas"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    res.send(data);
  }
  valid ? getQuestions(db) : res.status(401).send("Not authorized");
           

  
}


