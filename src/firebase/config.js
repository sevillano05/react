// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCP4b8UnMeo2aVNBQTvLeqphzhy4PoFp0",
  authDomain: "crud-react-17d71.firebaseapp.com",
  projectId: "crud-react-17d71",
  storageBucket: "crud-react-17d71.appspot.com",
  messagingSenderId: "932914273612",
  appId: "1:932914273612:web:0587c22a6a5f6ef4b503e9",
  measurementId: "G-GR7GSB1ER4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)