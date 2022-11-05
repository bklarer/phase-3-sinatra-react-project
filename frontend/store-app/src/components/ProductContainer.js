import { useState, useEffect} from 'react';
import Product from './Product';
import { Link, useParams } from "react-router-dom";



function ProductContainer () {
const [products, setProducts] = useState([])
const{ id } = useParams()
const [currentStore, setCurrentStore] = useState("")


    useEffect(() => {
        fetch(`http://localhost:9292/stores/${id}`)
            .then((resp) => resp.json())
            .then((store) => {
                setProducts(store.products)
                setCurrentStore(store.name)
            })
    },[id])

    function handleNewProduct() {
        fetch("http://localhost:9292/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({store_id: id}),
        })
        .then((resp) => resp.json())
        .then((store) => {
            setProducts((products) => [...products, store] )
        })
    }



return(
    <div>
        <h1>{`Store: ${currentStore}`}</h1>
        <button onClick={() => handleNewProduct()}>Add Random Product</button>
        <h2>{"Products"}</h2>
        {products.map((product) => {
            return(
            <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.img_url}
            
            />
            )
        })

        }


    </div>


    )   

}

export default ProductContainer