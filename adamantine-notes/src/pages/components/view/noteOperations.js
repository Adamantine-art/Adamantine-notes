import styles from '../../../styles/Home.module.css'
import Image from 'next/image';
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
      getNotes().then((data) => {
         setNotesArray(data.docs.map((note) => {
            return { ...note.data(), id: note.id }
         }))
      })
         .catch((error) => {
            console.log(error);
         })
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

            <div className={styles.notesDisplayContainer}>
               {notesArray.map((note) => {
                  return (
                     <div key={note} className={styles.eachNote}>
                        <div>
                           <h4 className={styles.noteTitle}>{note.noteTitle}</h4>
                           <p className={styles.noteText}>{note.noteText}</p>
                        </div>
                        <div className={styles.iconsContainer}>
                           <Image src="/img/pen.png" alt="edit" width={25} height={25} 
                           className={styles.edit} />
                           <Image src="/img/trash.png" alt="delete" width={25} height={25}
                              className={styles.delete} />
                        </div>
                     </div>
                  )
               })}
            </div>


         </div>
      </>
   )
}
