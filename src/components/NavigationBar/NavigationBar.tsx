import React from 'react';

import './Navigationbar.scss';

function NavigationBar() {
  return (
    <div className="navbar">
      <div className="navbar--container">
        {/* Left Side if the Navigation Bar */}
        <div className="navbar__logo">
          <i className="fab fa-amazon navbar__logo-icon"></i>
          <div className="navbar__logo-text">amaze</div>
        </div>

        {/* Right side of the Navigation Bar */}
        <div className="navbar__links">
          <div className="navbar__links-link">Shop</div>
          <div className="navbar__links-link">Contact</div>
          <div className="navbar__links-link">Sign up</div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
