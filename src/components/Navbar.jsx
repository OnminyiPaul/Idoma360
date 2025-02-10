import React, { useState } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className={`menu ${menuOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Traditional Rulers</a></li>
        <li><a href="#">Market Days</a></li>
        <li><a href="#">LGA's</a></li>
        <li><a href="#">Icons</a></li>
        <li><a href="#">Media</a></li>
      </ul>
      <i className="fas fa-search search-icon"></i>
      <i 
        className="fas fa-bars menu-toggle" 
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>
    </nav>
  );
};

export default Navbar;
