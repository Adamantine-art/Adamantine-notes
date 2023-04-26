import styles from '../../../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { getNotes, addNote } from '../../../../firebase-config';

export const NoteOperations = () => {
   const [isInputVisible, setInputVisible] = useState(false);
   const inputToggle = () => {
      setInputVisible(!isInputVisible)
   }

   const [noteTitleInput, setNoteTitleInput] = useState("");
   const [noteTextInput, setNoteTextInput] = useState("");
   const [notesArray, setNotesArray] = useState([]);

   const addNoteButton = () => {
      addNote(noteTitleInput, noteTextInput)
   }

   useEffect(() => {
      getNotes();
   }, []);

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

            {/* <div className={styles.notesDisplay}>
               {notesArray.map((note) => {
                  <div className={styles.notesInner}>
                     <h4>{note.noteTitle}</h4>
                     <p>{note.noteDescription}</p>
                  </div>
               })}
            </div> */}


         </div>
      </>
   )
}
