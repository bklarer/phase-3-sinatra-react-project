import { useState, useEffect} from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import Stores from './Stores';

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <Stores/>
    </div>
  );
}

export default App;
