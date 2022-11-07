import { Link, useParams } from "react-router-dom";
import { Col } from "react-bootstrap";

function Review({ id, date_time, rating, reviewer, text, onHandleDelete }) {
  const date = date_time.split("T")[0];
  const stars = "★".repeat(rating);
  const { storeId, productId } = useParams();

  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${id}`, {
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
      <h2>Name: {reviewer}</h2>
      <h3>Date: {date}</h3>
      <h3>Rating = {stars}</h3>
      <p>Review: {text}</p>
      <Link to={`/stores/${storeId}/products/${productId}/reviews/${id}`}>
        Edit
      </Link>
      <button onClick={() => handleDeleteClick()}>Delete</button>
      <p>------------------------------------</p>
    </Col>
  );
}

export default Review;
