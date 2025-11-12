import { useContext, useMemo, useRef, useState } from "react"
import Note from "./Note"
import { NotesContext } from "./NoteContect"
// import { NotesContext } from "./NoteContect"

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
// export default function NoteList() {
//     const notes = useContext(NotesContext)
//     return (
//         <ul>
//             {notes.map(note => (
//                 <li key={note.id}><Note note={note}/></li>
//             ))}
//         </ul>
//     )
// }

//menggunakan memo
export default function NoteList() {
    const notes = useContext(NotesContext);
    const [search, setSearch] = useState("");
    const searchInput = useRef(null);

    const filteredNotes = useMemo(() => {
        console.info("Filtering Notes")
        return notes.filter(note => note.text.includes(search));
    }, [notes, search])

    function handleSearch() {
        console.info("Seacrh");
        setSearch(searchInput.current.value)
    }

    return (
        <div>
            <input type="text" placeholder="Search" ref={searchInput} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {filteredNotes.map(note => (
                    <li key={note.id}>
                        <Note note={note}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

