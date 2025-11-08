// import { useState } from "react";
import { Immer } from "immer";
import { useImmer } from "use-immer";

const initialData = {
  names: "",
  message: ""
};

// export default function ContactForm() {
//     const [contact, setContact] = useState(initialData);

//     function handleNameChange(e){
//         setContact({...contact, names: e.target.value})
//     }

//     function messageChange(e){
//         setContact({...contact, message: e.target.value})
//     }
    
//     return (
//         <div>
//             <h1>Contact Form</h1>
//             <form action="">
//                 <input type="text" placeholder="Name" name="" id="" value={contact.names} onChange={handleNameChange} style={{marginBlock:"10px"}}/>
//                 <br />
//                 <input type="text" placeholder="Message" name="" id="" value={contact.message} onChange={messageChange} />
//             </form>
//             <h1>Contact Detail</h1>
//             <h2>Name: {contact.names}</h2>
//             <h2>Message: {contact.message}</h2>
//         </div>
//     )
// }

// menggunakan use-immer
export default function ContactForm() {
    const [contact, setContact] = useImmer(initialData);

    function handleNameChange(e){
        setContact(draft => {
            draft.names = e.target.value;
        })
    }

    function messageChange(e){
        setContact(draft => {
            draft.message = e.target.value;
        })
    }
    
    return (
        <div>
            <h1>Contact Form</h1>
            <form action="">
                <input type="text" placeholder="Name" name="" id="" value={contact.names} onChange={handleNameChange} style={{marginBlock:"10px"}}/>
                <br />
                <input type="text" placeholder="Message" name="" id="" value={contact.message} onChange={messageChange} />
            </form>
            <h1>Contact Detail</h1>
            <h2>Name: {contact.names}</h2>
            <h2>Message: {contact.message}</h2>
        </div>
    )
}
