import React from 'react';
import { HeaderContainer, HeaderContent, HeaderLogo, NavBar, MobileMenu } from './headerElements';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLogo>Wildlife</HeaderLogo>
        <NavBar>
          <MobileMenu />
        </NavBar>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header;