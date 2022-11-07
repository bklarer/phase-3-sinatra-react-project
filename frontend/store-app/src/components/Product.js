import { Link } from "react-router-dom";
import { Col, Card } from "react-bootstrap";

function Product({ id, name, price, img, store_id, onHandleDelete }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((resp) => {
      resp.json();
      onHandleDelete(id);
    });
  }

  return (
    <Col sm={4}>
      <Card>
        <h2>{name}</h2>
        <img src={img} alt={"Product"} />
        <p>{`$${price}`}</p>
        <button onClick={() => handleDeleteClick()}>Delete</button>
        <div>
          <Link to={`${store_id}/products/${id}`}>See Reviews</Link>
        </div>
      </Card>
    </Col>
  );
}

export default Product;
