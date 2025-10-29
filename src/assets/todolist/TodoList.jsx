import Todo from "./Todo";

export default function TodoList() {
    return (
        <ul>
            <Todo isCompleted={true} isDeleted={true} text="Learn HTML"/>
            <Todo isCompleted={true} isDeleted={true}  text="Learn CSS"/>
            <Todo isCompleted={true}  text="Learn Javascript"/>
            <Todo isCompleted={false} text="Learn ReactJs"/>
        </ul>
    )
}