import { useContext } from "react"
import Note from "./Note"
import { NotesContext } from "./NoteContect"

// export default function NoteList({notes, onChange, onDelete}) {
//     return (
//         <ul>
//             {notes.map(note => (
//                 <li key={note.id}><Note note={note}  onChange={onChange} onDelete={onDelete}/></li>
//             ))}
//         </ul>
//     )
// }

//menggunakan context
export default function NoteList() {
    const notes = useContext(NotesContext)
    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}><Note note={note}/></li>
            ))}
        </ul>
    )
}