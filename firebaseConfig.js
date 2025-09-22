// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFlUhr3wfN5pE5VxdFnX7oRQC63RfGKhw",
  authDomain: "feetsell-aa61c.firebaseapp.com",
  projectId: "feetsell-aa61c",
  storageBucket: "feetsell-aa61c.firebasestorage.app",
  messagingSenderId: "1025352822204",
  appId: "1:1025352822204:web:cc73ca838eeea805a28fb9"
};

;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
