import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Nav = () => {

    const navStyle = {
        color: "rgb(0, 0, 0)"
    };

    return(
        <nav className="nav">
            <ul className="nav-links">
                <Link style={navStyle} to="/">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/about">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/recipe-search">
                    <li>Search Recipes</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;