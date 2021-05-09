import React from 'react';
import './App.scss';

import { Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar/NavigationBar';

import HomePage from './pages/HomePage/HomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';

function App() {
  return (
    <div>
      <nav>
        <NavigationBar />
      </nav>

      <section className="container">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/category/:categoryId" component={CategoryPage} />
      </section>
    </div>
  );
}

export default App;
