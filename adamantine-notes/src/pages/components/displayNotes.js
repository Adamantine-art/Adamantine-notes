import { getNotes } from "../../../firebase-config";
import { useEffect, useState } from "react";
import styles from '../../styles/Home.module.css';
import { noteID } from "./noteID";
import Image from "next/image";

export const DisplayNotes = ({NoteID}) => {
   const [notesArray, setNotesArray] = useState([]);

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

   // useEffect(() => {
   //    getNotes();
   // })
   
   return (
      <>
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
                           className={styles.delete} onClick={() => noteID(note.id)} />
                     </div>
                  </div>
               )
            })}
         </div>
      </>
   )
}

