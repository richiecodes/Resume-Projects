import React from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav className="nav">
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/recipe-search">
                    <li>Search Recipes</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;