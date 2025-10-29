import './HelloWorld.css'

// function HelloWorld() {
//     return (
//         <div>
//             <h1>Helllo World</h1>
//             <p>Selamat belajar ReactJs di Programmer Zaman Now</p>
//         </div>
//     )
// }

//multi component
// function HelloWorld() {
//     return (
//         <div>
//             <HeaderHelloWorld/>
//             <ParagraphHelloWorld/>
//         </div>
//     )
// }

// export function HeaderHelloWorld() {
//     return (
//         <h1>Hello World</h1>
//     )
// }

// export function ParagraphHelloWorld() {
//     return (
//         <p>Selamat belajar ReactJs</p>
//     )
// }

//Javascript di jsx
// export function HeaderHelloWorld() {
//     const text = "Hello World"
//     return (
//         <h1
//         style={{
//             color: "red",
//             backgroundColor: "aqua"
//         }}
//         >{text.toUpperCase()}</h1>
//     )
// }

// export function ParagraphHelloWorld() {
//     const text = "Selamat belajar ReactJs";
//     const style = {
//         color: "yellow",
//         backgroundColor: "blue"
//     }
//     return (
//         <p style={style}>{text.toLowerCase()}</p>
//     )
// }

//menggunakan props
// export function HelloWorld(props) {
//     const text = "Selamat belajar ReactJs";
//     const style = {
//         color: "yellow",
//         backgroundColor: "blue"
//     }
//     return (
//         <p style={style}>{props.text.toLowerCase()}</p>
//     )
// }

//mwnggunakan destructuring props dan default
// export function HelloWorld({text = "Ups, belum memasukan kata"}) {
//     const style = {
//         color: "yellow",
//         backgroundColor: "blue"
//     }
//     return (
//         <p style={style}>{text.toLowerCase()}</p>
//     )
// }

//cara menggunakan css
function HelloWorld() {
    return (
        <div>
            <HeaderHelloWorld/>
            <ParagraphHelloWorld/>
        </div>
    )
}

export function HeaderHelloWorld() {
    return (
        <h1 className='title'>Hello World</h1>
    )
}

export function ParagraphHelloWorld() {
    return (
        <p className='content'>Selamat belajar ReactJs</p>
    )
}

export default HelloWorld;