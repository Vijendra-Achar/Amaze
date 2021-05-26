import React, { Component } from 'react';

import './LoginPage.scss';

export default class LoginPage extends Component {
  render() {
    return (
      <div className=" login container__main">
        <div className="login__title"> Please sign in.</div>
        <br />
        <label className="material-input-outline" htmlFor="email_id">
          <input id="email_id" className="login__email" type="text" />
          <span className="placeholder">Email</span>
        </label>

        <br />
        <br />
        <label className="material-input-outline" htmlFor="password">
          <input id="password" className="login__password" type="password" />
          <span className="placeholder">Password</span>
        </label>
      </div>
    );
  }
}
