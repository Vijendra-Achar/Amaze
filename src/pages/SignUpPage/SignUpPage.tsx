import React, { Component } from 'react';

import FormTextInput from '../../components/FormTextInput/FormTextInput';

import './SignUpPage.scss';

interface SignupProps {}
interface SignupState {
  firstname: string;
  lastname: string;
  email: string;
  dateOfBirth?: Date;
  password: string;
  passwordConfirm: string;
}

export default class SignUpPage extends Component<SignupProps, SignupState> {
  constructor(props: SignupProps) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      dateOfBirth: undefined,
      password: '',
      passwordConfirm: '',
    };
  }

  handleSignupSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      dateOfBirth: undefined,
      password: '',
      passwordConfirm: '',
    });
  };

  handleSignupChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value } as Pick<SignupState, keyof SignupProps>);

    console.log(`${name} : ${value}`);
  };

  render() {
    return (
      <div className="signup container__main">
        <div className="signup__title">Create a new account.</div>

        <form onSubmit={this.handleSignupSubmit}>
          <div className="signup__main-block">
            {/* Username block */}
            <div className="signup__username block">
              {/* First name  */}
              <div className="signup__username firstname">
                <FormTextInput
                  id="firstname"
                  name="firstname"
                  value={this.state.firstname}
                  handleChange={this.handleSignupChange}
                  type="text"
                  label="Your first name"
                  required
                />
              </div>

              {/* Last name  */}
              <div className="signup__username lastname">
                <FormTextInput
                  id="lastname"
                  name="lastname"
                  value={this.state.lastname}
                  handleChange={this.handleSignupChange}
                  type="text"
                  label="Your last name"
                  required
                />
              </div>
            </div>

            {/* Email block */}
            <div className="signup__email">
              <FormTextInput
                id="email"
                name="email"
                value={this.state.email}
                handleChange={this.handleSignupChange}
                type="text"
                label="Email"
                required
              />
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
              <FormTextInput
                id="password"
                name="password"
                value={this.state.password}
                handleChange={this.handleSignupChange}
                type="password"
                label="New Password"
                required
              />
            </div>

            {/* Password confirm block */}
            <div className="signup__password-confirm">
              <FormTextInput
                id="passwordConfirm"
                name="passwordConfirm"
                value={this.state.passwordConfirm}
                handleChange={this.handleSignupChange}
                type="password"
                label="Confirm your password"
                required
              />
            </div>

            {/* Agree to terms block */}
            <div className="signup__terms">
              <input id="terms" type="checkbox" required />
              <label> I agree to terms and conditions </label>
            </div>
          </div>

          {/* Sign up button */}
          <button type="submit" className="material-btn ">
            Sign me up!
          </button>
        </form>
      </div>
    );
  }
}
