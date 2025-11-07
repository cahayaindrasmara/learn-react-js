import { StrictMode } from "react"
import {createRoot} from "react-dom/client"
import HelloWorld from "./HelloWorld"
import Container from "./Container"
import TodoList from "../todolist/TodoList"
import Table from "../table/table"
import AlertButton from "../button/AlertButton"
import MyButton from "../button/MyButton"
import Toolbar from "../button/Toolbar"
import FormSearch from "../form/formSearch"
import SayHelloForm from "../form/SayHelloForm"
import Counter from "../form/Counter"

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            {/* <HelloWorld /> */}

            {/* cara mengirim props */}
            {/* <HelloWorld text="hallo"/> */}

            {/* jika attribut nya banyak bisa menggunakan spread */}
            {/* <HelloWorld {...props}/> */}

            {/* memanggila children */}
            <Container>
                <HelloWorld />
                <TodoList />
                <Table />
                <AlertButton text="Click" message="You Clicked Me!!"/>
                <MyButton text="Click Me" onSmash={() => alert("You Smash Me")} />
                <Toolbar 
                    onClick={(e) => {
                        e.stopPropagation();
                        alert("You Click Toolbar")
                    }}
                />
                <FormSearch/>
                <SayHelloForm />

                <Counter />
            </Container>
        </StrictMode>
    )

