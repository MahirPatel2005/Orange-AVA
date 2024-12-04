// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Orange Ava</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" to="#books">Books</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="#services">Services</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="#blog">Blog</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="#contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;