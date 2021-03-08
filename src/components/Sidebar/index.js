import React from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';

import './index.scss';

const Sidebar = ({ refe }) => {
    return (
        <div className="sidebar-container">
            <SidebarComponent className="sidebar" type="Push" closeOnDocumentClick ref={refe}>
                <h1>Sidebar Title</h1>
            </SidebarComponent>
        </div>
    );
};

export default Sidebar;
