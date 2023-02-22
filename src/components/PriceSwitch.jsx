import React from 'react';
import CustomBadge from './customized-components/CustomBadge';
import CustomSwitch from './customized-components/CustomSwitch';

const PriceSwitch = ({ setIsAnnualPrice }) => {

    const handleSetAnnualPrice = (ev) => {
        setIsAnnualPrice(ev.target.checked);
    }

    return (
        <div className="my-2 p-4 position-relative">
            <CustomSwitch
                leftLabel="Monthly"
                rightLabel="Annual"
                id="time-range-switch"
                switchColor="secondary"
                handleChange={handleSetAnnualPrice}
            />

            <div className="badge-container">
                <i class="fa-solid fa-arrow-left-long arrow-icon me-2"></i>
                <CustomBadge
                    backgroundColor="#eae8fd"
                    color="#7367f0"
                    fontSize="0.8rem"
                    className="save-badge"
                >
                    Save up to 10%
                </CustomBadge>
            </div>
        </div>
    );
}

export default PriceSwitch;
