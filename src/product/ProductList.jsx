import { useEffect, useState, /*useRef*/ } from "react"
import Product from "./Product";

export default function ProductList() {
    // const [products, setProducts] = useState([]);
    // const loaded = useRef(false)

    // useEffect(() => {
    //     console.info("use effect call")
    //     if (loaded.current === false) {
    //         fetch("/product.json")
    //         .then((response) => response.json())
    //         .then((data) => setProducts(data))
    //         .then(() => loaded.current = true)
    //     }

    //     //clean up
    //     return (()=> (
    //         console.log("Product list component unmounted")
    //     ))
    // })

    //menggunakan dependencies
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    function handleClick() {
        setLoad(true)
    }

    //menggunakan [], sekali saja munculnya
    useEffect(() => {
        console.info("use effect call with []")
    })

    // useEffect(() => {
    //     console.info("use effect call")
    //     if (load) {
    //         fetch("/product.json")
    //         .then((response) => response.json())
    //         .then((data) => setProducts(data))
    //     }

    //     //clean up
    //     return (()=> (
    //         console.log("Product list component unmounted")
    //     ))
    // }, [load])

    //menggunakan async await
    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch("/product.json")
            const data = await response.json(); 
            setProducts(data)
        }

        if (load) {
            fetchProducts()
        }

        //clean up
        return (()=> (
            console.log("Product list component unmounted")
        ))
    }, [load])

    return (
        <>
            <h1>Product List:</h1>
            <button onClick={handleClick}>Load Products</button>
            <ul>
                {products.map((product) => (
                    <li key={product.id}><Product product={product}/></li>
                ))}
            </ul>
        </>
    )
}