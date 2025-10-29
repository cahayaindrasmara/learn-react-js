import { StrictMode } from "react"
import {createRoot} from "react-dom/client"
import HelloWorld from "./HelloWorld"
import Container from "./Container"
import TodoList from "../assets/todolist/TodoList"

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
            </Container>
        </StrictMode>
    )

