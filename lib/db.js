import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
  const firebaseConfig = {
    apiKey: "AIzaSyBv_pYDF4H2-qmpGw7oYt69a0e7axSAuYs",
    authDomain: "fiqh-23169.firebaseapp.com",
    projectId: "fiqh-23169",
    storageBucket: "fiqh-23169.appspot.com",
    messagingSenderId: "998432852147",
    appId: "1:998432852147:web:ed7b2d25ee5abef1bfc8c6",
    measurementId: "G-SVMT3ZHCPG"
  };
  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;