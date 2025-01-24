// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGO7IZLLUXlyGhl1im7sGkt1RYPBGGwjM",
  authDomain: "oec-web-cbb05.firebaseapp.com",
  projectId: "oec-web-cbb05",
  storageBucket: "oec-web-cbb05.firebasestorage.app",
  messagingSenderId: "397282574084",
  appId: "1:397282574084:web:bef837297047d6bcdfda51",
  measurementId: "G-E9MLJ1V7VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

