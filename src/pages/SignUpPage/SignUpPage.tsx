import React from 'react';

import './SignUpPage.scss';

function SignUpPage() {
  return (
    <div className="signup container__main">
      <div className="signup__title">Create a new account.</div>

      <div className="signup__main-block">
        {/* Username block */}
        <div className="signup__username block">
          {/* First name  */}
          <div className="signup__username firstname">
            <label className="material-input-outline" htmlFor="firstname">
              <input id="firstname" type="text" required />
              <span className="placeholder">Your first name</span>
              {/* <p className="input__error">
              <i className="fas fa-exclamation-circle"></i> Email ID is missing
            </p> */}
            </label>
          </div>

          {/* Last name  */}
          <div className="signup__username lastname">
            <label className="material-input-outline" htmlFor="lastname">
              <input id="lastname" type="text" required />
              <span className="placeholder">Your last name</span>
              {/* <p className="input__error">
              <i className="fas fa-exclamation-circle"></i> Email ID is missing
            </p> */}
            </label>
          </div>
        </div>

        {/* Email block */}
        <div className="signup__email">
          <label className="material-input-outline" htmlFor="email">
            <input id="email" type="text" required />
            <span className="placeholder">Email</span>
            {/* <p className="input__error">
              <i className="fas fa-exclamation-circle"></i> Email ID is missing
            </p> */}
          </label>
        </div>

        {/* Date of birth block */}
        <div className="signup__dateOfBirth">
          <label className="material-input-outline" htmlFor="dateOfBirth">
            <input
              id="dateOfBirth"
              type="text"
              required
              onFocus={(e) => (e.currentTarget.type = 'date')}
              onBlur={(e) => (e.currentTarget.type = 'text')}
            />
            <span className="placeholder"> Date of birth</span>
            {/* <p className="input__error">
              <i className="fas fa-exclamation-circle"></i> Email ID is missing
            </p> */}
          </label>
        </div>

        {/* Password block */}
        <div className="signup__password">
          <label className="material-input-outline" htmlFor="password">
            <input id="password" type="password" required />
            <span className="placeholder">Password</span>
            {/* <p className="input__error">
              <i className="fas fa-exclamation-circle"></i> Email ID is missing
            </p> */}
          </label>
        </div>

        {/* Password confirm block */}
        <div className="signup__password-confirm">
          <label className="material-input-outline" htmlFor="password-confirm">
            <input id="password-confirm" type="password" required />
            <span className="placeholder">Confirm password</span>
            {/* <p className="input__error">
              <i className="fas fa-exclamation-circle"></i> Email ID is missing
            </p> */}
          </label>
        </div>

        {/* Agree to terms block */}
        <div className="signup__terms">
          <input id="terms" type="checkbox" required />
          <label> I agree to terms and conditions </label>
        </div>
      </div>

      {/* Sign up button */}

      <button className="material-btn ">Sign me up!</button>
    </div>
  );
}

export default SignUpPage;
