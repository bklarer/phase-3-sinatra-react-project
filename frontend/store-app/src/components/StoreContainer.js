import Store from "./Store";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

function StoreContainer({stores, setStores}) {

  function handleDelete(id) {
    const updatedStores = stores.filter((store) => store.id !== id);
    setStores(updatedStores);
  }

  return (
    <Container>
        <Link to="/">Go Back</Link>
        <h1>Stores</h1>
        <Link to="/stores/new">Add New Store</Link>
        <Row>  
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
