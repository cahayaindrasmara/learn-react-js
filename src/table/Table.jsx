import Row from "./Row";

export default function Table() {
    //not pure component
    // return (
    //     <table border="1" >
    //         <tbody>
    //             <Row text={"satu"}/>
    //             <Row text={"satu"}/>
    //             <Row text={"dua"}/>
    //             <Row text={"tiga"}/>
    //         </tbody>
    //     </table>
    // )

    //pure component
    return (
        <table border={1}>
            <tbody>
                <Row id="1" text="Satu" />
                <Row id="2" text="Dua" />
                <Row id="3" text="Tiga" />
            </tbody>
        </table>
    )
}