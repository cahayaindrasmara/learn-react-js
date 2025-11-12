// export default function handleClick({text}) {
//     alert("Button clicked");

import { useRef } from "react"

//     return (
//         <button onClick={handleClick}>{text}</button>
//     )
// }

// membaca props untuk event handler
// export default function handleClick({text,message}) {
//     alert(message);

//     return (
//         <button onClick={handleClick}>{text}</button>
//     )
// }

//membaca event object
export default function AlertButton({text, message}) {
    const counter = useRef(0);

    function handleClick(e) {
        // console.info(e)
        console.log(e.target)
        alert(`${message} ${counter.current++}`)
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}