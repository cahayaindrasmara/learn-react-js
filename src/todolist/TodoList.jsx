import Todo from "./Todo";

// export default function TodoList() {
//     return (
//         <ul>
//             <Todo isCompleted={true} isDeleted={true} text="Learn HTML"/>
//             <Todo isCompleted={true} isDeleted={true}  text="Learn CSS"/>
//             <Todo isCompleted={true}  text="Learn Javascript"/>
//             <Todo isCompleted={false} text="Learn ReactJs"/>
//         </ul>
//     )
// }


//menggunakan collection component menggunakan js di react js
// export default function TodoList() {
//     const data = [
//         {
//             text : "Learn HTML",
//             isCompleted : true
//         },
//         {
//             text : "Learn HTML",
//             isCompleted : true
//         },
//         {
//             text : "Learn Javascript",
//             isCompleted : false
//         },
//         {
//             text : "Learn ReactJs",
//             isCompleted : false
//         }
//     ]

//     const todos = data.map(todo => <Todo {...todo}/>)

//     return (
//         <ul>
//             {todos}
//         </ul>
//     )
// }

// menggunakan component key
export default function TodoList() {
    const data = [
        {   
            id: 0,
            text : "Learn HTML",
            isCompleted : true
        },
        {
            id: 1,
            text : "Learn HTML",
            isCompleted : true
        },
        {
            id:2,
            text : "Learn Javascript",
            isCompleted : false
        },
        {
            id: 3,
            text : "Learn ReactJs",
            isCompleted : false
        }
    ]

    return (
        <ul>
            {data.map((todo) => (
                <Todo key={todo.id} {...todo} /> //biasa nya lebih sering memasukan logic disini dari pada buat variabel
            ))
            }
        </ul>
    )
}