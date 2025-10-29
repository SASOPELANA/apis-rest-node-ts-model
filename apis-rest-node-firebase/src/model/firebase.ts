// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2UKpqOGSH4jxeRFLwrcRQhMHKuXh_sDc",
  authDomain: "proyecto-tech-node.firebaseapp.com",
  projectId: "proyecto-tech-node",
  storageBucket: "proyecto-tech-node.firebasestorage.app",
  messagingSenderId: "99127580668",
  appId: "1:99127580668:web:1a3a016d2c1a71b9a18479",
  measurementId: "G-QG8JYQ6H4B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
