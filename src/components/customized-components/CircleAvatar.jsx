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
        background-color: ${props => props.dotColor || "#39c826"};
        border: 2px solid #fff;
        border-radius: 50%;
        translate: 0 12%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const CircleAvatar = ({ src, width, hasDot, dotColor, className }) => {
    return (
        <div className={`position-relative ${className}`}>
            <Avatar src={src} width={width} dotColor={dotColor} />
                {
                    hasDot ? (
                        <div className="avatar-dot"
                        style={{
                            width: width ? `calc(${width} / 3)` : "13.3px",
                            height: width ? `calc(${width} / 3)` : "13.3px"
                        }}>
                        </div>
                    ) : null
                }
        </div>
    );
}

export default CircleAvatar;
