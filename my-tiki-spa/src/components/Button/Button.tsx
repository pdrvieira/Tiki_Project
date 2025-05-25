import React from 'react';
import { StyledButton, Spinner, OkIcon } from './Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  success?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ loading, success, children, ...props }) => {
  return (
    <StyledButton disabled={loading || success} {...props}>
      {loading ? <Spinner /> : success ? <OkIcon>✔</OkIcon> : children}
    </StyledButton>
  );
};

export { Spinner, OkIcon };
export default Button;