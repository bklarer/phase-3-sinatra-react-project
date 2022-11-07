import { Route, Switch } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import StoreContainer from "./StoreContainer";
import ProductContainer from "./ProductContainer";
import ReviewContainer from "./ReviewContainer";
import ReviewForm from "./ReviewForm";
import EditReview from "./EditReview";
import { useState } from "react";

function App() {
  const [reviews, setReviews] = useState([]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/stores">
          <StoreContainer />
        </Route>
        <Route exact path="/stores/:storeId">
          <ProductContainer />
        </Route>
        <Route exact path="/stores/:storeId/products/:productId">
          <ReviewContainer reviews={reviews} setReviews={setReviews} />
        </Route>
        <Route exact path="/stores/:storeId/products/:productId/reviews/new">
          <ReviewForm reviews={reviews} setReviews={setReviews} />
        </Route>
        <Route
          exact
          path="/stores/:storeId/products/:productId/reviews/:reviewId"
        >
          <EditReview reviews={reviews} setReviews={setReviews} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
