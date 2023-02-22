import React from 'react';
import SidebarHeaderItem from './SidebarHeaderItem';
import SidebarItem from './SidebarItem';

const SidebarList = () => {
    return (
        <div className="w-100 mt-4">
            <SidebarHeaderItem text="Pages" />
            <SidebarItem
                path="/home"
                icon="fa-solid fa-house"
                text="Home"
            />
            <SidebarItem
                path="/Account"
                icon="fa-solid fa-user"
                text="Account"
            />
            <SidebarItem
                path="/pricing"
                icon="fa-solid fa-dollar-sign"
                text="Pricing"
            />
            <SidebarItem
                path="/invoice"
                icon="fa-solid fa-file-invoice-dollar"
                text="Invoice"
            />
        </div>
    );
}

export default SidebarList;
