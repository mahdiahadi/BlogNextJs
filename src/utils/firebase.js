// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-234a8.firebaseapp.com",
  projectId: "blog-234a8",
  storageBucket: "blog-234a8.appspot.com",
  messagingSenderId: "887431663780",
  appId: "1:887431663780:web:2b0ee984634aecc3419631"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);