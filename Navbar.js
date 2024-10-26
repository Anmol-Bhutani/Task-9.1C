import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
    </nav>
  );
};

export default Navbar;
