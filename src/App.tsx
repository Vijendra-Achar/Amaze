import React from 'react';
import { Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar/NavigationBar';

import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';

import './App.scss';

function App() {
  return (
    <div>
      <nav>
        <NavigationBar />
      </nav>

      <section className="container">
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/category/:categoryId" component={CategoryPage} />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
