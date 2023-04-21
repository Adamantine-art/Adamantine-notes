import styles from '../../styles/Home.module.css';
import { useState } from 'react';
import { saveNote } from '../../../firebase-config';

export const NoteOperations = () => {
   const [isInputVisible, setInputVisible] = useState(false);
   const inputToggle = () => {
      setInputVisible(!isInputVisible)
   }

   const [noteTitleInput, setNoteTitleInput] = useState("");
   const [noteTextInput, setNoteTextInput] = useState("");
   const saveNoteButton = () => {
      saveNote(noteTitleInput, noteTextInput)
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
               <input value={noteTitleInput} className={styles.input}
                  placeholder='Title'
                  onChange={(e) => setNoteTitleInput(e.target.value)}
               />
               <input value={noteTextInput} className={styles.input} placeholder='Write your note here' 
               onChange={(e) => setNoteTextInput(e.target.value)} />
               <button
                  onClick={saveNoteButton}
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
