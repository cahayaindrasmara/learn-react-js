export default function Toolbar({onClick}) {
    return (
        <div onClick={onClick} style={{padding: "10px", backgroundColor: "blue"}}>
            <button onClick={onClick}>First</button>
            <button onClick={onClick}>Second</button>
        </div>
    )
}