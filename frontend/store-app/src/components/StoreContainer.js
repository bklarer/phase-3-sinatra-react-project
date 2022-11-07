import { useState, useEffect } from "react";
import Store from "./Store";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function StoreContainer() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/stores")
      .then((resp) => resp.json())
      .then((stores) => setStores(stores));
  }, []);

  function handleDelete(id) {
    const updatedStores = stores.filter((store) => store.id !== id);
    setStores(updatedStores);
  }

  function handleNewStore() {
    fetch("http://localhost:9292/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((resp) => resp.json())
      .then((store) => {
        setStores((stores) => [...stores, store]);
      });
  }

  return (
    <Container>
        <Link to="/">Go Back</Link>
        <Row>
          <button onClick={() => handleNewStore()}>Add Random Store</button>
          <h1>Stores</h1>
          {stores.map((store) => {
            return (
              <Store
                key={store.id}
                id={store.id}
                name={store.name}
                zipcode={store.zipcode}
                img={store.img_url}
                onHandleDelete={handleDelete}
              />
            );
          })}
      </Row>
    </Container>
  );
}

export default StoreContainer;
