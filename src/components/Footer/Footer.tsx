import React from 'react';

import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__body container__main">
        <div className="footer__top-portion">
          <div className="footer__text">
            The Amaze Online Store uses industry-standard encryption to protect the confidentiality of the information
            you submit. Learn more about our Security Policy.
          </div>
        </div>
        <hr />
        <div className="footer__bottom-portion">
          <div className="footer__text">More ways to shop: Find a retailer near you. Or call 000800 040 1966.</div>
          <div className="footer__text">
            Copyright © 2021 Amaze Inc. All rights reserved.
            <span className="footer__links">
              <a href="/#">Privacy Policy</a>|<a href="/#">Terms of use</a>|<a href="/#">Sales Policy</a>|
              <a href="/#">Legal</a>|<a href="/#">Site Map</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
