import { StrictMode } from "react"
import {createRoot} from "react-dom/client"
import HelloWorld from "./HelloWorld"
import Container from "./Container"
import TodoList from "../todolist/TodoList"
import Table from "../table/table"
import AlertButton from "../button/AlertButton"
import MyButton from "../button/MyButton"

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
            </Container>
        </StrictMode>
    )

