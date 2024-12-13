import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav style={{ padding: '10px', background: '#f4f4f4' }}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/search" style={{ margin: '0 10px' }}>Search</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
    </nav>
  );
};

export default Header;
