import React from 'react';
import styled from 'styled-components';

const Badge = styled.span`
    background-color: ${props => props.backgroundColor || "#21d3ffbb"};
    color: ${props => props.color || "#006f8b"};
    padding: 6px 12px;
    border-radius: 8px;
    font-size: ${props => props.fontSize || "0.9rem"} ;
    font-weight: ${props => props.fontWeight || "600"};
`;

const CustomBadge = ({ children, backgroundColor, color, fontSize, fontWeight, className }) => {
    return (
        <Badge
            backgroundColor={backgroundColor}
            color={color}
            fontSize={fontSize}
            fontWeight={fontWeight}
            className={className}
        >
            {children}
        </Badge>
    );
}

export default CustomBadge;
