// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);