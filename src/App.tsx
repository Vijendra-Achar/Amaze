import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import firebase, { auth } from './firebase/firebase.config';
import { createUserProfileDoc } from './firebase/database';

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

interface AppProps {}

interface UserProfileData {
  createdAt: number;
  displayName: string;
  email: string;
  emailVerified: boolean;
  phoneNumber?: number | string | null;
  photoURL: string;
  signInMethod: string;
  uid: string;
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  authUnsubscribe: any = null;

  componentDidMount() {
    this.authUnsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userDocRef = await createUserProfileDoc(userAuth);

        userDocRef?.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: snapShot.data(),
            },
            () => {
              console.log('Current user data from firebase', this.state.currentUser);
            },
          );
        });
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
          <NavigationBar currentUser={this.state.currentUser} />
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
