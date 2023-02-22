import React from 'react';
import SidebarHeader from './SidebarHeader';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import SidebarList from './SidebarList';

const Sidebar = () => {
    const { isExtended, isOpen } = useContext(AppContext);

    return (
        <aside className={`sidebar ${isExtended ? "sidebar-extended" : ""} 
        ${isOpen ? "open-sidebar" : ""}`}>
            <SidebarHeader />
            <SidebarList />
        </aside>
    );
}

export default Sidebar;
