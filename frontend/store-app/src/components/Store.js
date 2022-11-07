import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";

function Store({ id, name, zipcode, img, onHandleDelete }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/stores/${id}`, {
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
      <img src={img} alt={"Store"} />
      <h1>{name}</h1>
      <p>Zip Code {zipcode}</p>
      <div>
        <button onClick={() => handleDeleteClick()}>Delete</button>
      </div>
      <Link to={`/stores/${id}`}>See Products</Link>
    </Col>
  );
}

export default Store;
