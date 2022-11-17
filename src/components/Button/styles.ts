import styled from 'styled-components';

interface ButtonProps {
    width: number | undefined;
    height: number | undefined;
    variant?: 'primary';
}

export const Button = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    width: ${({ width }) => (width === undefined ? 'auto' : `${width}px`)};
    height: ${({ height }) => (height === undefined ? 'auto' : `${height}px`)};
    font-family: 'Montserrat', sans-serif;

    ${({ variant }) => (variant === 'primary') && `
        border: 1px solid #8C64FF;
        color: #8C64FF;
        background: #DEE4E6;
        font-weight: 600;
    `}


    &:not(:disabled):hover {
        ${({ variant }) => variant === 'primary' && `
           background: #8C64FF;
           border: 1px solid #8C64FF;
           color: #DEE4E6;
           font-weight: 700;
           transition-delay: 0.1s;
        `}
    }
`;