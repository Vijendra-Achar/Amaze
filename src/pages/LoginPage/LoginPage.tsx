import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.scss';

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login container__main">
        <div className="login__title">Please sign in.</div>

        {/* Main container */}
        <div className="login__main-block">
          {/* Left side of the container -- login with email and password part */}
          <div className="login__left-side">
            <div className="login__email">
              <label className="material-input-outline" htmlFor="email_id">
                <input id="email_id" type="text" required />
                <span className="placeholder">Email</span>
                {/* <p className="input__error">
              <i className="fas fa-exclamation-circle"></i> Email ID is missing
            </p> */}
              </label>
            </div>

            <div className="login__password">
              <label className="material-input-outline" htmlFor="password">
                <input id="password" type="password" required />
                <span className="placeholder">Password</span>
              </label>
            </div>

            <div className="login__button">
              <button className="material-btn">Sign me in!</button>
            </div>

            <div className="login__link">
              <Link className="link" to="/#">
                Forgot password?
              </Link>
            </div>

            <div className="login__link">
              <Link className="link" to="/#">
                Don't have an account? Create a new one!
              </Link>
            </div>
          </div>

          <div className="login__divider">
            <span className="or">OR</span>
          </div>

          {/* Right side of the container -- login with facebook and google part */}
          <div className="login__right-side">
            <button className="material-btn google">
              <i className="fab fa-google-plus-g"></i> Login with Google
            </button>
            <button className="material-btn facebook">
              <i className="fab fa-facebook"></i> Login with Facebook
            </button>
          </div>
        </div>
      </div>
    );
  }
}
