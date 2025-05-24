import React from 'react';
import { StyledHeader, StyledLogo } from './Header.styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src="/src/assets/logo-tiki.svg" alt="Tiki Logo" />
      </StyledLogo>
    </StyledHeader>
  );
};

export default Header;