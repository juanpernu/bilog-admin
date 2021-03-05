import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

import './index.scss';

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            <Header />
            <Sidebar />
            <div className="layout-container--content">
                {children}
            </div>
        </div>
    );
};

export default Layout;