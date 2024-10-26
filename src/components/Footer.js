import React from 'react';
import logoImage from './images/LLogo2.png'; // Update with the correct path to your image

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <img src={logoImage} alt="Freshly Frosted logo" className="footer-logo" />
        <p>© 2023 Freshly Frosted. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

