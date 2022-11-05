import { useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import StoreContainer from './StoreContainer';

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <StoreContainer/>
    </div>
  );
}

export default App;
