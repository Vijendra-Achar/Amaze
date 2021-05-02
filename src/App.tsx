import React from 'react';
import './App.scss';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/prod" component={ProductDetails} />
    </div>
  );
}

export default App;
