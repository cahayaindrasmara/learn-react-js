import { useRef, useState } from "react"

export default function GuestBook() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const nameInput = useRef(null)

    function handleSubmit(e) {
        e.preventDefault();
        setName("");
        setMessage("");

        //ini cara manual
        // document.getElementById("name").focus()

        // gunakan ini
        nameInput.current.focus()

        alert(`Name: ${name} Message: ${message}`)
    }

    return (
        <>
            <h1>Guest Book</h1>
            <form>
                <label htmlFor="name">Name:</label> <br />
                <input /*id="name"*/ ref={nameInput} type="text" name="name" value={name} 
                onChange={(e) => {
                    setName(e.target.value)
                }} /> <br />
                <label htmlFor="message">Message:</label> <br />
                <textarea name="message" id="" value={message} 
                onChange={(e) => {
                    setMessage(e.target.value)
                }} ></textarea> <br />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}