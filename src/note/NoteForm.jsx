import { useContext, useState } from "react"
import { DispatchContext } from "./NoteContect";

// export default function NoteForm({onSubmit}) {
//     const [text, setText] = useState("");

//     function handleChange(e) {
//         setText(e.target.value);
//     }

//     function handleClick() {
//         setText("");
//         onSubmit(text)
//     }

//     return (
//         <>
//             <input type="text" placeholder="text" value={text} onChange={handleChange} />
//             <button onClick={handleClick}>Add</button>
//         </>
//     )
// }


//menggunakan context
export default function NoteForm() {
    const [text, setText] = useState("");
    const dispatch = useContext(DispatchContext)

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleClick() {
        setText("");
        dispatch({
            type: "ADD_NOTE",
            text: text
        })
    }

    return (
        <>
            <input type="text" placeholder="text" value={text} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
        </>
    )
}