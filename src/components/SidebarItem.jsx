import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ path, icon, text }) => {
    return (
        <NavLink to={path} className={({ isActive }) => {
            return isActive ?
                "d-flex justify-content-start align-items-center sidebar-item no-link mt-1 active-item"
                : "d-flex justify-content-start align-items-center sidebar-item no-link mt-1";
        }}>
            <i className={`${icon} mb-1`}></i>
            <span className="hidden-item ms-2">{text}</span>
        </NavLink>

    );
}

export default SidebarItem;
