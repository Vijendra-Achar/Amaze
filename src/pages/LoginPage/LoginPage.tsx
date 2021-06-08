import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FormTextInput from '../../components/FormTextInput/FormTextInput';

import './LoginPage.scss';

interface LoginProps {}

interface LoginState {
  emailId: string;
  password: string;
}
export default class LoginPage extends Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);

    this.state = {
      emailId: '',
      password: '',
    };
  }

  handleLoginSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    this.setState({ emailId: '', password: '' });
  };

  handleLoginChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value } as Pick<LoginState, keyof LoginState>);

    console.log(`${name} : ${value}`);
  };

  render() {
    return (
      <div className="login container__main">
        <div className="login__title">Please sign in.</div>

        {/* Main container */}
        <div className="login__main-block">
          {/* Left side of the container -- login with email and password part */}
          <div className="login__left-side">
            <form onSubmit={this.handleLoginSubmit}>
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

              <div className="login__button">
                <button type="submit" className="material-btn">
                  Sign me in!
                </button>
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
