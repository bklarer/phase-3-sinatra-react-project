import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Review from "./Review";
import { Container, Row } from "react-bootstrap";

function ReviewContainer({ reviews, setReviews }) {
  const [currentProduct, setCurrentProduct] = useState("");
  const { productId, storeId } = useParams();

  function handleDelete(id) {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  }

  useEffect(() => {
    fetch(`http://localhost:9292/products/${productId}`)
      .then((resp) => resp.json())
      .then((product) => {
        setReviews(product.reviews);
        setCurrentProduct(product.name);
      });
  }, [productId, setReviews]);

  return (
    <Container>
      <h1>Product: {currentProduct}</h1>
      <Link to={`/stores/${storeId}`}>Go Back</Link>
      <p>------------------------------------</p>
      <Link to={`/stores/${storeId}/products/${productId}/reviews/new`}>
        Add Review
      </Link>
      <Row>
        {reviews.map((review) => {
          return (
            <Review
              key={review.id}
              id={review.id}
              date_time={review.date}
              rating={review.stars}
              reviewer={review.reviewer_first_name}
              text={review.review_text}
              onHandleDelete={handleDelete}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default ReviewContainer;
