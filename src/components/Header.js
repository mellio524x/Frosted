import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Freshly Frosted</h1>
      <nav>
        <Link to="/">Home</Link> |  
        <Link to="/gallery">Gallery</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
