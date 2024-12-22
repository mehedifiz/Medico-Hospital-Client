// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  process.meta.env.VIYE_FIREBASE_apiKey: "AIzaSyAzaSKFrUfpZJZsg9KbkcTZfojU5yQ1J-8",
  process.meta.env.VIYE_FIREBASE_authDomain: "medicone-plus.firebaseapp.com",
  process.meta.env.VIYE_FIREBASE_projectId: "medicone-plus",
  process.meta.env.VIYE_FIREBASE_storageBucket: "medicone-plus.firebasestorage.app",
  process.meta.env.VIYE_FIREBASE_messagingSenderId: "847175149833",
  process.meta.env.VIYE_FIREBASE_appId: "1:847175149833:web:b496f445aaa2fefae2cbd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);