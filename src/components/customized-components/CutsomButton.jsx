import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.backgroundColor || "#00CCFFBB"};
    color: ${props => props.color || "#222"};
    padding: 7px 25px;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.borderColor || props.backgroundColor || "#00CCFFBB"};
    border-radius: 10px;
    font-size: ${props => props.fontSize || "1rem"};
    font-weight: ${props => props.fontWeight || "600"};
    transition: all 0.25s;

    &:hover {
        background-color: ${props => props.hoverBackgroundColor || props.backgroundColor || "#0CF"};
        color: ${props => props.hoverColor || props.color || "#222"};
    }
`;

const CutsomButton = ({
    children,
    backgroundColor,
    color,
    hoverBackgroundColor,
    hoverColor,
    fontSize,
    fontWeight,
    borderColor,
    href,
    openInCurrentTab,
    className
}) => {
    return (
        <>
            {
                href ? (
                    <a href={href} target={openInCurrentTab ? "_parent" : "_blank"} 
                    rel="noreferrer" className="border-radius-10px no-link">
                        <Button
                            backgroundColor={backgroundColor}
                            color={color}
                            hoverBackgroundColor={hoverBackgroundColor}
                            hoverColor={hoverColor}
                            fontSize={fontSize}
                            fontWeight={fontWeight}
                            borderColor={borderColor}
                            className={className}
                        >
                            {children}
                        </Button>
                    </a >
                ) : (
                    <Button
                        backgroundColor={backgroundColor}
                        color={color}
                        hoverBackgroundColor={hoverBackgroundColor}
                        hoverColor={hoverColor}
                        fontSize={fontSize}
                        fontWeight={fontWeight}
                        borderColor={borderColor}
                        className={className}
                    >
                        {children}
                    </Button>
                )
            }
        </>
    );
}

export default CutsomButton;
