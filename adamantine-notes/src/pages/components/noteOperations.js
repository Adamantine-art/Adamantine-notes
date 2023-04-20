import { app, database } from '../../../firebase-config';
import { collection, addDoc } from 'firebase/firestore'; // addDoc to add data in a collection
import styles from '../../styles/Home.module.css';
import { useState } from 'react';

const mainCollection = collection(database, 'notes'); // to take the database from firebase config

export const NoteOperations = () => {
   const [isInputVisible, setInputVisible] = useState(false);
   const inputToggle = () => {
      setInputVisible(!isInputVisible)
   }

   const [noteTitle, setNoteTitle] = useState(true); // mmm?

   const saveNote = () => { // saving the data to use it on firebase
      <button
         onClick={saveNote}
         className={styles.saveBtn}>
         Save Note
      </button>
      // this is for firestore
      addDoc(mainCollection, {
         noteTitle: noteTitle
      })

   }

   return (
      <>
         <div className={styles.btnContainer}>
            <button
               onClick={inputToggle}
               className={styles.button}>
               Add a New Note
            </button>
         </div>

         {isInputVisible ? (
            <div className={styles.inputContainer}>
               <input
                  className={styles.input}
                  placeholder='Title'
                  onChange={(e) => setNoteTitle(e.target.value)} // revisar SAVE NOTE BTN, no toma datos
               />
               <input className={styles.input} placeholder='Write your note here' />
               <button
                  className={styles.saveBtn}>
                  Save Note
               </button>
            </div>
         ) : (
            <></>
         )}


      </>
   )
}
