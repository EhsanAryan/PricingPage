import { Switch } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const LabeledSwitch = styled.div`
    color: ${props => props.color || "#6f6b7d"};
    font-size: ${props => props.fontSize || "1rem"};
`;

const CustomSwitch = ({ leftLabel, rightLabel, id, labelColor, fontSize, switchColor, handleChange }) => {
    return (
        <LabeledSwitch color={labelColor} fontSize={fontSize}>
            {leftLabel}
            <Switch id={id} name={id} color={switchColor || "primary"}
            onChange={handleChange ? (ev) => handleChange(ev) : () => {}} />
            {rightLabel}
        </LabeledSwitch>
    );
}

export default CustomSwitch;
