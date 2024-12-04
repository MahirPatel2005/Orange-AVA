import React from "react";
import "./style.css"; // Optional: Move styles to a separate CSS file
import img1 from "./assets/logo.jpeg"

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Top-right icons */}
      <div className="navbar-icons">
        <a href="#">
          <i className="fas fa-user"></i>
        </a>
        <a href="#">
          <i className="fas fa-search"></i>
        </a>
        <a href="#">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>

      {/* Logo */}
      <div className="navbar-logo">
        <img src={img1} alt="Logo" />
      </div>

      {/* Links */}
      <ul className="navbar-links">
        <li className="active">
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Books</a>
        </li>
        <li>
          <a href="#">Technology Partner - Thinknyx</a>
        </li>
        <li>
          <a href="#">HR Solutions</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
