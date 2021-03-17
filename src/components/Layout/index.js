import React, { useRef } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';

import './index.scss';

const Layout = ({ children }) => {
    const SidebarRef = useRef(null)
    const openSidebar = () => {
        SidebarRef.current.toggle();
    }

    return (
        <div className="layout-container">
            <Header />
            <Sidebar refe={SidebarRef} />
            <button onClick={openSidebar}>
                OPEN SIDEBAR
            </button>
            <div className="layout-container--content">
                {children}
            </div>
        </div>
    );
};

export default Layout;