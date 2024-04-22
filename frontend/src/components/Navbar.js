import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    const handleLogout = () => {
        // Reload the page when Log Out is clicked
        window.location.reload();
    }

    return (
        <div className="navbar">
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <NavLink to="/home" activeClassName="active" className="navbar-link">
                        Plants
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/cart" activeClassName="active" className="navbar-link">
                        Cart
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink to="/about" activeClassName="active" className="navbar-link">
                        About Us
                    </NavLink>
                </li>
                <li className="navbar-item" style={{marginLeft:'840px'}}>
                    <a href="/" className="navbar-link" onClick={handleLogout}>
                        Log out
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
