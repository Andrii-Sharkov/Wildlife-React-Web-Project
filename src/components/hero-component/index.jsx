import React from 'react';
import { HeroBackground, HeroContent, HeroTitle, HeroSubtitle, HeroButton } from './heroElements';

const Hero = () => {
  return(
    <HeroBackground>
      <HeroContent>
        <HeroTitle>The best of the wildlife photography</HeroTitle>
        <HeroSubtitle>
          Winning images from national and international wildlife photography competitions of the year
        </HeroSubtitle>
        <HeroButton>View More</HeroButton>
      </HeroContent>
    </HeroBackground>
  )
}

export default Hero;