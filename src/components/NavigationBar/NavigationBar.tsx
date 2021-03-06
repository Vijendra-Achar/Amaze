import React, { Component } from 'react';

import firebase from '../../firebase/firebase.config';

import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

import { connect } from 'react-redux';

import amazonLogo from '../../assets/amazon.svg';

import './Navigationbar.scss';
interface NavProps extends RouteComponentProps {
  currentUser: firebase.firestore.DocumentData | undefined | null | {};
}

interface NavState {}
class NavigationBar extends Component<NavProps, NavState> {
  constructor(props: NavProps) {
    super(props);
  }

  componentDidMount() {}

  render() {
    let loginOrUserBtn;

    if (!this.props.currentUser) {
      loginOrUserBtn = (
        <div
          onClick={() => {
            this.props.history.push('/login');
          }}
        >
          {<i className="fas fa-sign-in-alt user__icon"></i>}
        </div>
      );
    } else {
      loginOrUserBtn = (
        <div
          onClick={() => {
            this.props.history.push('/profile');
          }}
        >
          {<i className="far fa-user-circle user__icon"></i>}
        </div>
      );
    }

    return (
      <div className="navbar">
        <div className="navbar--container">
          {/* Left Side of the Navigation Bar */}
          <div
            onClick={() => {
              this.props.history.push('/');
            }}
            className="navbar__logo"
          >
            <img className="navbar__logo-image" src={amazonLogo} alt="" />
          </div>

          {/* Right side of the Navigation Bar */}

          <div className="navbar__menu">
            <i className="fas fa-bars menu__btn"></i>
          </div>

          <div className="navbar__links">
            <div className="navbar__links-link">Contact</div>
            <div className="navbar__links-link">About</div>

            <div onClick={() => this.props.history.push('/wishlist')} className="navbar__links-link wishlist">
              <i className="far fa-heart wishlist__icon"></i>
            </div>

            <div onClick={() => this.props.history.push('/bag')} className="navbar__links-link bag">
              <i className="fas fa-shopping-bag bag__icon"></i>
            </div>

            <div className="navbar__links-link user">{loginOrUserBtn}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(withRouter(NavigationBar));
