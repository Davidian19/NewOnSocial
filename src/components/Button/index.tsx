import React, { ButtonHTMLAttributes, CSSProperties } from 'react';
import * as S from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    onClick?: () => void;
    children?: React.ReactNode;
    width?: number | undefined;
    height?: number | undefined;
    variant?: 'primary';
    style?: CSSProperties;
    disabled?: boolean;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick, children, width, height, variant, style, disabled, loading,
}: ButtonProps) => (
  <S.Button disabled={disabled} onClick={onClick} width={width} height={height} variant={variant} style={style}>
    {!loading ? children : (
      <>
        {children}
      </>
    )}
  </S.Button>
);

export default Button;
