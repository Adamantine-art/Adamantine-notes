import styles from '../../styles/Home.module.css'
import { useState } from 'react';
import { addNote } from '../../../firebase-config';

export const NewNote = () => {
   const [isInputVisible, setInputVisible] = useState(false);
   const inputToggle = () => {
      setInputVisible(!isInputVisible)
   }

   const [noteTitleInput, setNoteTitleInput] = useState("");
   const [noteTextInput, setNoteTextInput] = useState("");

   const addNoteButton = () => {
      addNote(noteTitleInput, noteTextInput)
   }

   return (
      <>
         <div className={styles.homeContainer}>


            <div className={styles.btnContainer}>
               <button
                  onClick={inputToggle}
                  className={styles.button}>
                  +
               </button>

               {isInputVisible ? (
                  <div className={styles.inputContainer}>
                     <input value={noteTitleInput} className={styles.input}
                        placeholder='Title'
                        onChange={(e) => setNoteTitleInput(e.target.value)}
                     />
                     <textarea value={noteTextInput} className={styles.textArea} placeholder='Write your note here'
                        onChange={(e) => setNoteTextInput(e.target.value)} />
                     <button
                        onClick={addNoteButton}
                        className={styles.saveBtn}>
                        ✓
                     </button>
                  </div>
               ) : (
                  <></>
               )}
            </div>

         </div>
      </>
   )
}
