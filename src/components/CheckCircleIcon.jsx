import React from 'react';
import CustomBadge from './customized-components/CustomBadge';

const CheckCircleIcon = () => {
    return (
        <CustomBadge
            backgroundColor="#eae8fd"
            color="#7367f0"
            className="rounded-circle circle-icon-badge"
            fontSize="0.75rem"
        >
            <i class="fa-solid fa-check"></i>
        </CustomBadge>
    );
}

export default CheckCircleIcon;
