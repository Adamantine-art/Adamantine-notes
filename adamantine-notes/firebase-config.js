// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChjG_wv6jAPIT2C4BFMOWIv2ubEZrUruI",
  authDomain: "adamantine-notes.firebaseapp.com",
  projectId: "adamantine-notes",
  storageBucket: "adamantine-notes.appspot.com",
  messagingSenderId: "459419210229",
  appId: "1:459419210229:web:3d940f01f907cb892850bc",
  measurementId: "G-14FCRZD0DD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
