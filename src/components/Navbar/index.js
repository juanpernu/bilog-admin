import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const NavBar = () => {
    return (
        <div className="navbar-container">
            <p><Link to="/">Bilog Admin</Link></p>
        </div>
    );
};

export default NavBar;