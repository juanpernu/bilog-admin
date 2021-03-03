import React from 'react';
import Header from '../Header';

import './index.scss';

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            <div className="layout-container--children">
                {children}
            </div>
        </div>
    );
};

export default Layout;