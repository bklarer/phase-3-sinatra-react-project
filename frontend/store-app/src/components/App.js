import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import StoreContainer from './StoreContainer';
import ProductContainer from './ProductContainer';
import ReviewContainer from './ReviewContainer';
import ReviewForm from './ReviewForm';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/stores">
          <StoreContainer/>
        </Route>
        <Route exact path="/stores/:id">
          <ProductContainer/>
        </Route>
        <Route exact path="/stores/:storeId/products/:id">
          <ReviewContainer/>
        </Route>
        <Route exact path="/stores/:storeId/products/:id/reviews/new">
          <ReviewForm/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
