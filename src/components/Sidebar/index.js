import React from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';

import './index.scss';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <SidebarComponent className="sidebar" closeOnDocumentClick={true} type="Push">
                <h1>Sidebar Title</h1>
            </SidebarComponent>
        </div>
    );
};

export default Sidebar;
