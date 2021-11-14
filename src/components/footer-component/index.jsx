import React from 'react';
import { FooterSection, FooterContent, FooterPar } from './footerElements';

const Footer = () => {
  return (
    <FooterSection>
      <FooterContent>
        <FooterPar>
          The Website was made with 💗 using React and Styled Components by <span>Andrew Sharkov</span>
        </FooterPar>
      </FooterContent>  
    </FooterSection>
  )
}

export default Footer;