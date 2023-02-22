import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
    width: ${props => props.width || "40px"};
    height: ${props => props.width || "40px"};
    border-radius: 50%;

    & + .avatar-dot {
        position: absolute;
        bottom: 0;
        right: 0;
        width: ${props => props.dotWidth || "12px"};
        height: ${props => props.dotWidth || "12px"};
        background-color: ${props => props.dotColor || "#39c826"};
        border: 2px solid #fff;
        border-radius: 50%;
        translate: -10% 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const CircleAvatar = ({ src, width, hasDot,dotWidth, dotColor, className }) => {
    return (
        <div className={`position-relative ${className}`}>
            <Avatar src={src} width={width}  dotWidth={dotWidth} dotColor={dotColor} />
                {
                    hasDot ? (
                        <div className="avatar-dot"></div>
                    ) : null
                }
        </div>
    );
}

export default CircleAvatar;
