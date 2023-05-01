import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Web app's Firebase configuration
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
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const mainCollection = collection(database, 'notes');

export const addNote = (noteTitle, noteText) => {
  addDoc(mainCollection, {
    noteTitle: noteTitle,
    noteText: noteText
  })
};

export const getNotes = () => {
  return getDocs(mainCollection)
}
