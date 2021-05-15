import React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';
import amazonLogo from '../../assets/amazon.svg';

import './Navigationbar.scss';
interface props extends RouteComponentProps {}

function NavigationBar({ history }: props) {
  return (
    <div className="navbar">
      <div className="navbar--container">
        {/* Left Side of the Navigation Bar */}
        <div
          onClick={() => {
            history.push('/');
          }}
          className="navbar__logo"
        >
          <img className="navbar__logo-image" src={amazonLogo} alt="" />
          {/* <div className="navbar__logo-text">amaze</div> */}
        </div>

        {/* Right side of the Navigation Bar */}
        <div className="navbar__links">
          <div className="navbar__links-link">Contact</div>
          <div className="navbar__links-link">About</div>
          <div className="navbar__links-link bag">
            <i className="fas fa-shopping-bag bag__icon"></i>
          </div>

          <div className="navbar__links-link user">
            <i className="far fa-user-circle user__icon"></i>
          </div>

          {/* <div className="navbar__links-link">Login</div> */}
        </div>
      </div>
    </div>
  );
}

export default withRouter(NavigationBar);
