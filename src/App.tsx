import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import firebase, { auth } from './firebase/firebase.config';
import { getCurrentUserDocument } from './firebase/database';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { setCurrentUser } from './store/user/user.actions';

import { UserDocumentData } from './store/user/user.interface';

import NavigationBar from './components/NavigationBar/NavigationBar';

import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import UserProfilePage from './pages/UserProfilePage/UserProfilePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';

import './App.scss';

interface AppState {
  currentUser: firebase.firestore.DocumentData | undefined | null;
}

interface AppProps {
  setCurrentUser: Function;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  authUnsubscribe: any = null;

  componentDidMount() {
    this.authUnsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const userDocRef = getCurrentUserDocument(userAuth);

        userDocRef?.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.authUnsubscribe();
  }

  render() {
    return (
      <div>
        <nav>
          <NavigationBar />
        </nav>

        <section className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/profile" component={UserProfilePage} />
            <Route exact path="/category/:categoryId" component={CategoryPage} />
          </Switch>
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: UserDocumentData) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
