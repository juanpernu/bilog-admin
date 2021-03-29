import React, { useRef, useState } from 'react';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

import './index.scss';

const Sidebar = ({ refe }) => {
    const [isOpen, setIsOpen] = useState(false);
    const SidebarRef = useRef(null);
    const openSidebar = () => {
        SidebarRef.current.toggle();
        setIsOpen(!isOpen);
    }

    return (
        <div className="sidebar-container">
            <SidebarComponent className="sidebar" type="Push" ref={SidebarRef}>
                <h1 className="sidebar--title">Sidebar Title</h1>
                <div className="sidebar--links">
                    <span className="sidebar--links__posts">
                        <a href="/posts">Posts</a>
                    </span>
                    <span className="sidebar--links__documentation">
                        <a href="/documentation">Documentation</a>
                    </span>
                </div>
            </SidebarComponent>
            <div>
                <ButtonComponent id="toggle" iconCss='e-icons burg-icon' isToggle={true} onClick={openSidebar} className="e-btn e-info">{isOpen ? 'Close' : 'Open'}</ButtonComponent>
            </div>
        </div>
    );
};

export default Sidebar;
