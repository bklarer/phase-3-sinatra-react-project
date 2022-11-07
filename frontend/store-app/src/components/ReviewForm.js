import { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

function ReviewForm({ reviews, setReviews }) {
  const { id } = useParams();
  const history = useHistory();

  const [newReview, setNewReview] = useState({
    reviewer_first_name: "",
    stars: 1,
    review_text: "",
    product_id: id,
  });

  console.log(newReview);

  function handleChange(e) {
    const { name, value } = e.target;
    setNewReview((newReview) => ({ ...newReview, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((resp) => resp.json())
      .then((review) => {
        setReviews((reviews) => [...reviews, review]);
        history.push(`../`);
      });
  }

  return (
    <div>
      <Link to={`../`}>Go Back</Link>
      <h1>New Review</h1>
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

export default ReviewForm;
