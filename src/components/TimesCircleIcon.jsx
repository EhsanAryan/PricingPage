import React from 'react';
import CustomBadge from './customized-components/CustomBadge';

const TimesCircleIcon = () => {
    return (
        <CustomBadge
            backgroundColor="#f2f2f3"
            color="#a8aaae"
            className="rounded-circle circle-icon-badge"
            fontSize="0.75rem"
        >
            <i class="fa-solid fa-xmark"></i>
        </CustomBadge>
    );
}

export default TimesCircleIcon;
