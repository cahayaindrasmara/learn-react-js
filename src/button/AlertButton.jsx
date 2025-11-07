// export default function handleClick({text}) {
//     alert("Button clicked");

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
    function handleClick(e) {
        // console.info(e)
        console.log(e.target)
        alert(message)
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}