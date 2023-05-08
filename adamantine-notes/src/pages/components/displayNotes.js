import { deleteNote, getNotes, onSnapshotNotes } from "../../../firebase-config";
import { useEffect, useState } from "react";
import styles from '../../styles/Home.module.css'
import Image from "next/image";

export const DisplayNotes = () => {
   const [notesArray, setNotesArray] = useState([]);

   useEffect(() => {
      onSnapshotNotes(), (snapshot) => {
         setNotesArray(snapshot.docs.map((note) => ({ ...note.data(), id: note.id }))
   )}
   }, []);

return (
   <>
      <div className={styles.notesDisplayContainer}>
         {notesArray.map((note) => {
            return (
               <div key={note.id} className={styles.eachNote}>
                  <div>
                     <h4 className={styles.noteTitle}>{note.noteTitle}</h4>
                     <p className={styles.noteText}>{note.noteText}</p>
                  </div>
                  <div className={styles.iconsContainer}>
                     <Image src="/img/pen.png" alt="edit" width={25} height={25}
                        className={styles.edit} />
                     <Image src="/img/trash.png" alt="delete" width={25} height={25}
                        className={styles.delete} onClick={() => deleteNote(id)} />
                  </div>
               </div>
            )
         })}
      </div>
   </>
)
}
