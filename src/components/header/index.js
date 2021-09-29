import React from 'react';
import './style.scss';

function Header() {
  return (
    <header className="siteHeader">
      <a href="/" className="headerLinkBox">
        <div className="headerTitle">
          <span className="headerTitle-title">Another UI Blog</span>
          <span className="headerTitle-tagline">A new frontier of web dev</span>
        </div>
      </a>
    </header>
  );
}

export default Header;
