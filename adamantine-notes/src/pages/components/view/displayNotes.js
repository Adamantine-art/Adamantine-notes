// import { getNotes } from "../../../../firebase-config";
// import { useEffect, useState } from "react";
// import styles from '../../../styles/Home.module.css';

// export const DisplayNotes = () => {
//     const [notesArray, setNotesArray] = useState([]);

//     useEffect(() => {
//         getNotes().then((data) => {
//             setNotesArray(data)
//         });
//     }, []);

//     return (
//         <>
//             {notesArray.forEach(noteObject => {
//                 const noteData = noteObject.data()
//                 return (
//                     <div key={noteData.id} className={styles.notesDisplay}>
//                         <div className={styles.notesInner}>
//                             <h4>{noteData.noteTitle}</h4>
//                             <p>{noteData.noteDescription}</p>
//                         </div>
//                     </div>
//                 )
//             })}
//         </>
//     )
// }

