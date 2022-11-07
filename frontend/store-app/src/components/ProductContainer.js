import { useState, useEffect } from "react";
import Product from "./Product";
import { Link, useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";


function ProductContainer() {
  const [products, setProducts] = useState([]);
  const { storeId } = useParams();
  const [currentStore, setCurrentStore] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9292/stores/${storeId}`)
      .then((resp) => resp.json())
      .then((store) => {
        setProducts(store.products);
        setCurrentStore(store.name);
      });
  }, [storeId]);

  function handleNewProduct() {
    fetch("http://localhost:9292/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ store_id: storeId }),
    })
      .then((resp) => resp.json())
      .then((store) => {
        setProducts((products) => [...products, store]);
      });
  }

  function handleDelete(id) {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  }

  return (
    <Container>
      <Link to={"/stores"}>Go Back</Link>
      <Row>
      <h1>{`Store: ${currentStore}`}</h1>
      <button onClick={() => handleNewProduct()}>Add Random Product</button>
      <h2>{"Products"}</h2>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img_url}
            store_id={product.store_id}
            onHandleDelete={handleDelete}
          />
        );
      })}
      </Row>
    </Container>
  );
}

export default ProductContainer;
