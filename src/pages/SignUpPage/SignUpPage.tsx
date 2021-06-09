import React, { Component } from 'react';

import FormTextInput from '../../components/FormTextInput/FormTextInput';
import FormDatePicker from '../../components/FormDatePicker/FormDatePicker';

import './SignUpPage.scss';

interface SignupProps {}
interface SignupState {
  firstname: string;
  lastname: string;
  email: string;
  dateOfBirth: string;
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
      dateOfBirth: '',
      password: '',
      passwordConfirm: '',
    };
  }

  handleSignupSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    console.log('The Final object -->', this.state);

    this.setState({
      firstname: '',
      lastname: '',
      email: '',
      dateOfBirth: '',
      password: '',
      passwordConfirm: '',
    });
  };

  handleSignupChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    if (event.target.type === 'checkbox') {
      this.setState({ [name]: event.target.checked } as Pick<SignupState, keyof SignupProps>);
    } else {
      this.setState({ [name]: value } as Pick<SignupState, keyof SignupProps>);
    }

    // console.log(`${name} : ${value}`);
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
              <FormDatePicker
                id="dateOfBirth"
                name="dateOfBirth"
                value={this.state.dateOfBirth}
                label="Date of birth"
                handleChange={this.handleSignupChange}
                required
              />
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
            {/* <div className="signup__terms">
              <input name="termsAndConditions" onChange={this.handleSignupChange} id="terms" type="checkbox" required />
              <label> I agree to terms and conditions </label>
            </div> */}
          </div>

          {/* Sign up button */}
          <button type="submit" className="material-btn signup__submit">
            Sign me up!
          </button>
        </form>
      </div>
    );
  }
}
