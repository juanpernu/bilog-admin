import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const Header = () => {
    return (
        <div className="header-container">
            <span className="header-container--link">
                <Link to="/">Bilog Admin</Link>
            </span>
        </div>
    );
};

export default Header;
