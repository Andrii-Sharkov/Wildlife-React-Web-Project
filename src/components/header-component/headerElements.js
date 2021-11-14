import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const HeaderContainer = styled.header`
  background-color: black;
  height: 8vh;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 8px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.a`
  font-size: 2.5rem;
  font-weight: 300;
  color: white;
  letter-spacing: 4px;
  font-family: 'Poppins', sans-serif;
  text-shadow: 4px 4px 6px white;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileMenu = styled(FaBars)`
  color: white;
  font-size: 2rem;
`; 