import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

function EditReview({ reviews, setReviews }) {
  const { productId, reviewId } = useParams();
  const history = useHistory();

  const [newReview, setNewReview] = useState({
    reviewer_first_name: "",
    stars: 1,
    review_text: "",
    product_id: productId,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNewReview((newReview) => ({ ...newReview, [name]: value }));
  }

  function updateReview(updatedReview) {
    const updatedReviews = reviews.map((originalReview) => {
      if (originalReview.id === updatedReview.id) {
        return updatedReview;
      } else {
        return originalReview;
      }
    });
    setReviews(updatedReviews);
  }

  useEffect(() => {
    fetch(`http://localhost:9292/reviews/${reviewId}`)
      .then((resp) => resp.json())
      .then((review) => {
        setNewReview(review);
      });
  }, [reviewId]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/reviews/${reviewId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((resp) => resp.json())
      .then((updatedReview) => {
        updateReview(updatedReview);
        history.push(`../`);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="reviewer_first_name"
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          value={newReview.reviewer_first_name}
        />
        <div>
          <label>Rating</label>
          <input
            name="stars"
            type="number"
            min="1"
            max="5"
            onChange={handleChange}
            value={newReview.stars}
          />
        </div>
        <div>
          <textarea
            name="review_text"
            type="text"
            placeholder="Type review here..."
            onChange={handleChange}
            value={newReview.review_text}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditReview;
