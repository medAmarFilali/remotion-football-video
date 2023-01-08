import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNb3PeHUZ7A6Robrbyqsy-KwZ4pI8MVT4",
  authDomain: "footballvideogenerator.firebaseapp.com",
  projectId: "footballvideogenerator",
  storageBucket: "footballvideogenerator.appspot.com",
  messagingSenderId: "232757240686",
  appId: "1:232757240686:web:5ef4dd78cd8db887ec577f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
