import validateUser from "../../../lib/validate";
import { db } from "../../../lib/firebase";
import { 
  addDoc, 
  collection, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc 
} from "firebase/firestore";

export default async function handler(req, res) {
  const { method } = req;
  try {
    switch (method) {
      case "GET":
        await getArticles(req, res);
        break;
      case "POST":
        await addArticle(req, res);
        break;
      case "PATCH":
        await updateArticle(req, res);
        break;
      case "DELETE":
        await deleteArticle(req, res);
        break;
      default:
        res.setHeader("Allow", ["GET", "POST", "PATCH", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getArticles(req, res) {
  try {
    const articlesRef = collection(db, "article");
    const querySnapshot = await getDocs(articlesRef);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    res.status(200).json(data);
  } catch (error) {
    console.error("Error getting articles:", error);
    res.status(500).json({ error: "Failed to fetch articles" });
  }
}

async function addArticle(req, res) {
  try {
    const { title, content, lang, author, published } = req.body;
    
    if (!title || !content || !lang || !author) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const articlesRef = collection(db, "article");
    const docRef = await addDoc(articlesRef, {
      title,
      content,
      lang,
      author,
      published: published || false,
      createdAt: new Date().toISOString(),
    });

    res.status(201).json({ id: docRef.id });
  } catch (error) {
    console.error("Error adding article:", error);
    res.status(500).json({ error: "Failed to add article" });
  }
}

async function updateArticle(req, res) {
  try {
    const valid = validateUser(req, res);
    if (!valid) {
      return res.status(401).json({ error: "Not authorized" });
    }

    const { title, content, lang, author, published, id } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: "Article ID is required" });
    }

    const articleRef = doc(db, "article", id);
    await updateDoc(articleRef, {
      ...(title && { title }),
      ...(content && { content }),
      ...(lang && { lang }),
      ...(author && { author }),
      ...(published !== undefined && { published }),
      updatedAt: new Date().toISOString(),
    });

    res.status(200).json({ message: "Article updated successfully" });
  } catch (error) {
    console.error("Error updating article:", error);
    res.status(500).json({ error: "Failed to update article" });
  }
}

async function deleteArticle(req, res) {
  try {
    const valid = validateUser(req, res);
    if (!valid) {
      return res.status(401).json({ error: "Not authorized" });
    }

    const { id } = req.body;
    
    if (!id) {
      return res.status(400).json({ error: "Article ID is required" });
    }

    const articleRef = doc(db, "article", id);
    await deleteDoc(articleRef);

    res.status(200).json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error("Error deleting article:", error);
    res.status(500).json({ error: "Failed to delete article" });
  }
}

