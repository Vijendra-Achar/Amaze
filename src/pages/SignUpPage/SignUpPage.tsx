import React, { Component } from 'react';

import { signUpWithEmailAndPassword } from '../../firebase/auth';

import FormTextInput from '../../components/FormTextInput/FormTextInput';
import InputButton from '../../components/InputButton/InputButton';

import './SignUpPage.scss';
import { RouteComponentProps } from 'react-router-dom';
import { createUserProfileDoc } from '../../firebase/database';

interface SignupProps extends RouteComponentProps<any> {}
interface SignupState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordConfirm: string;
  errorMessage: string;
  isLoading: boolean;
}

export default class SignUpPage extends Component<SignupProps, SignupState> {
  constructor(props: SignupProps) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      errorMessage: '',
      isLoading: false,
    };
  }

  handleSignupSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (this.state.password === this.state.passwordConfirm) {
      this.setState({ isLoading: true, errorMessage: '' });

      signUpWithEmailAndPassword(this.state.email, this.state.password)
        .then((userAuth) => {
          createUserProfileDoc(userAuth.user, `${this.state.firstname} ${this.state.lastname}`);

          userAuth.user
            ?.updateProfile({
              displayName: `${this.state.firstname} ${this.state.lastname}`,
            })
            .then(() => {
              this.setState({
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                passwordConfirm: '',
                errorMessage: '',
              });

              this.setState({ isLoading: false });
              this.props.history.push('/');
            });
        })
        .catch((error) => {
          this.setState({ errorMessage: error.message });
          this.setState({ isLoading: false });

          console.log('Error while sign up', error.message);
        });
    } else {
      this.setState({ errorMessage: 'Passwords do not match' });
      this.setState({ isLoading: false });
    }
  };

  handleSignupChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value } as Pick<
      SignupState,
      'lastname' | 'password' | 'passwordConfirm' | 'email' | 'firstname'
    >);
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

            {/* Error message */}
            {this.state.errorMessage && (
              <p className="signup error-message">
                <i className="fas fa-exclamation-circle"></i> {this.state.errorMessage}
              </p>
            )}
          </div>

          {/* Sign up button */}

          <InputButton
            category="primary"
            type="submit"
            label="Sign me up!"
            isLoading={this.state.isLoading}
            isWideBtn
          />
        </form>
      </div>
    );
  }
}
