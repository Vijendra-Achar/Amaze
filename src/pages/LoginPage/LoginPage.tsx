import React, { Component } from 'react';

import './LoginPage.scss';

export default class LoginPage extends Component {
  render() {
    return (
      <div className="login container__main">
        <div className="login__title">Please sign in.</div>

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
      </div>
    );
  }
}
