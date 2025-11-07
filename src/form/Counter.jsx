// cara salah
// export default function Counter() {
//     let counter = 0;

//     function handleClick(e) {
//         counter++;
//         console.log(counter)
//     }
//     return (
//         <div>
//             <div>
//                 <button onClick={handleClick}>Increment</button>
//             </div>

//             <h1>Counter: {counter}</h1>
//         </div>
//     )
// }
import { useState } from "react";

// 

//kesalahan pemahaman dalam data state yaitu snapshot

// export default function Counter() {
//     let [counter, setCounter] = useState(0)

//     function handleClick() {
//         setCounter(counter + 1) //ini sama saja dengan 0 + 1
//         setCounter(counter + 1) //ini sama saja dengan 0 + 1
//         setCounter(counter + 1) //ini sama saja dengan 0 + 1
//         console.log(counter) //ini masih 0, karena dia belum di render ulang di selanjutnya
//     }

//     return(
//         <div>
//             <div>
//                 <button onClick={handleClick}>Increment</button>
//             </div>

//             <h1>Counter: {counter}</h1>
//         </div>
//     )
// }

//state updates 

export default function Counter() {
    let [counter, setCounter] = useState(0)

    function handleClick() {
        setCounter((c) => c + 1) //ini bisa mendapatkan data yang terbaru, karena dia di update didalam state management si function nya
        setCounter((c) => c + 1) //ini sama saja dengan 0 + 1
        setCounter((c) => c + 1) //ini sama saja dengan 0 + 1
        console.log(counter) //ini masih 0, karena dia belum di render ulang di selanjutnya
    }

    return(
        <div>
            <div>
                <button onClick={handleClick}>Increment</button>
            </div>

            <h1>Counter: {counter}</h1>
        </div>
    )
}
