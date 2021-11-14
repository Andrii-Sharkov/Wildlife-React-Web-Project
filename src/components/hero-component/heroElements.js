import styled from 'styled-components';
import HeroImage from '../../images/background-1.jpg';

export const HeroBackground = styled.div`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('${HeroImage}') no-repeat center center/cover;
  height: 90vh;
  background-attachment: fixed;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 750px;
  margin: 0 auto;
  transform: translateY(250px);

  @media (max-width: 540px) {
    width: 500px;
  }

  @media (max-width: 414px) {
    width: 350px;
  }
`;

export const HeroTitle = styled.h1`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 4rem;
  letter-spacing: 4px;
  text-align: center;
  text-shadow: 4px 4px 8px white;

  @media (max-width: 540px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 30px 0;
  text-align: center;

  @media (max-width: 540px) {
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;

export const HeroButton = styled.button`
  width: 200px;
  background: white;
  font-size: 1.5rem;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:hover {
    border: 0.5px solid white;
    background: transparent;
    color: white;
    letter-spacing: 2px;
  }
`;