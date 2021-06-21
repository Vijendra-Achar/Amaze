import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import firebase from '../../firebase/firebase.config';
import { signInWithGoogle, signInWithFacebook, signInWithEmailAndPassword } from '../../firebase/auth';
import { createUserProfileDoc } from '../../firebase/database';

import FormTextInput from '../../components/FormTextInput/FormTextInput';
import InputButton from '../../components/InputButton/InputButton';

import './LoginPage.scss';

interface LoginProps extends RouteComponentProps {}

interface LoginState {
  emailId: string;
  password: string;
  errorMessage: string;
  isLoading: boolean;
}
export default class LoginPage extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
      emailId: '',
      password: '',
      errorMessage: '',
      isLoading: false,
    };
  }

  // Handle Google Sign in
  handleSignInWithGoogle = () => {
    signInWithGoogle().then((userAuth: firebase.auth.UserCredential) => {
      createUserProfileDoc(userAuth.user).then(() => {
        this.props.history.push('/');
      });
    });
  };

  // Handle Facebook sign in
  handleSignInWithFacebook = () => {
    signInWithFacebook().then((userAuth: firebase.auth.UserCredential) => {
      createUserProfileDoc(userAuth.user).then(() => {
        this.props.history.push('/');
      });
    });
  };

  // Handle sign with email and password
  handleSignInWithEmailAndPassword: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (this.state.emailId && this.state.password) {
      this.setState({ isLoading: true, errorMessage: '' });

      signInWithEmailAndPassword(this.state.emailId, this.state.password)
        .then((userAuth) => {
          if (userAuth) {
            console.log('The user has been signed in successfully', userAuth);
            this.setState({ isLoading: false });
            this.props.history.push('/');
          }
        })
        .catch((error) => {
          this.setState({ isLoading: false, errorMessage: error.message });
          console.log('An error occured while loging in', error);
        });
    }
  };

  handleLoginChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value } as Pick<LoginState, 'emailId' | 'password'>);
  };

  render() {
    return (
      <div className="login container__main">
        <div className="login__title">Please sign in.</div>

        {/* Main container */}
        <div className="login__main-block">
          {/* Left side of the container -- login with email and password part */}
          <div className="login__left-side">
            <form onSubmit={this.handleSignInWithEmailAndPassword}>
              <div className="login_email">
                <FormTextInput
                  name="emailId"
                  value={this.state.emailId}
                  label="Email"
                  type="text"
                  handleChange={this.handleLoginChange}
                  required
                />
              </div>

              <div className="login__password">
                <FormTextInput
                  id="password"
                  label="Password"
                  value={this.state.password}
                  handleChange={this.handleLoginChange}
                  type="password"
                  name="password"
                  required
                />
              </div>

              {/* Error message */}
              {this.state.errorMessage && (
                <p className="signup error-message">
                  <i className="fas fa-exclamation-circle"></i> {this.state.errorMessage}
                </p>
              )}

              <div className="login__button">
                <InputButton
                  type="submit"
                  isLoading={this.state.isLoading}
                  label="Log me in!"
                  category="primary"
                  isWideBtn
                />
              </div>
            </form>

            <div className="login__link">
              <Link className="link" to="/#">
                Forgot password?
              </Link>
            </div>

            <div className="login__link">
              <Link className="link" to="/signup">
                Don't have an account? Create a new one!
              </Link>
            </div>
          </div>

          <div className="login__divider">
            <span className="or">OR</span>
          </div>

          {/* Right side of the container -- login with facebook and google part */}
          <div className="login__right-side">
            {/* Google sign in */}
            <div className="login__button">
              <InputButton
                onClickHandler={this.handleSignInWithGoogle}
                type="button"
                label="Login with Google"
                category="google"
                icon="fa-google-plus-g"
                isWideBtn
              />
            </div>

            {/* Facebook sign in */}
            <div className="login__button">
              <InputButton
                onClickHandler={this.handleSignInWithFacebook}
                type="button"
                label="Login with Facebook"
                category="facebook"
                icon="fa-facebook"
                isWideBtn
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
