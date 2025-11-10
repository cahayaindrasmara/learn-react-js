import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
    const [show2, setShow2] = useState(true);

    function handleChange(e) {
        setShow2(e.target.checked);
    }

    return (
        <div>
            {/* <Counter/> */}
            {/* {show2 ? <Counter name = "Cahaya" /> : <Counter name= "Mara"/>} component yang sama dan diposisi yang sama */}
            {/* {show2 ? <Counter name = "cahaya" /> : <p>Hilang</p>} mengubah dengan component lain */}
            {/* {show2 ? (
                <div>
                    <Counter name="mara" />
                </div>
            ) : (
                <div>
                    <section>
                        <Counter name="cahaya" />
                    </section>
                </div>
            )} mengubah posisi component */}
            {/* {!show2 && <Counter name="mara"/>}
            {show2 && <Counter name="cahaya" />} posisi component berbeda */}
            {show2 ? <Counter key="mara" name="mara" /> : <Counter key="cahaya" name="cahaya" />}
            <input type="checkbox" checked={show2} onChange={handleChange} /> Tampilkan Counter 2
        </div>
    )
}