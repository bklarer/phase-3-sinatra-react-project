import { useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Home from './Home';
import StoreContainer from './StoreContainer';

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
      </Switch>
    </div>
  );
}

export default App;
