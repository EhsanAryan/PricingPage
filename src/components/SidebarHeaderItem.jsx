import React from 'react';

const SidebarHeaderItem = ({ text }) => {
    return (
        <div className='sidebar-header-item hidden-item text-muted'>
            {text}
        </div>
    );
}

export default SidebarHeaderItem;
