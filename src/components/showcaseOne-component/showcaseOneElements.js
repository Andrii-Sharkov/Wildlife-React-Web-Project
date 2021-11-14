import styled from 'styled-components';
import Image from '../../images/elephants-2.jpg';

export const ShowcaseOneBackground = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('${Image}') no-repeat center center/cover;
  height: 80vh;
  background-attachment: fixed;
`;

export const ShowcaseOneTitleWrapper  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 30px;
  width: 700px;
  margin: 0 auto;
  transform: translateY(150px);

  @media (max-width: 540px) {
    width: 500px;
  }

  @media (max-width: 414px) {
    width: 350px;
  }
`;

export const ShowcaseOneTitle = styled.h3`
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 4px;
  color: white;
  text-align: center;

  @media (max-width: 540px) {
    font-size: 2rem;
  }
`;

export const ShowcaseOneSubtitle = styled.p`
  color: white;
  font-size: 1.4rem;
  line-height: 1.5;
  margin: 25px 0 35px 0;
  text-align: center;

  @media (max-width: 540px) {
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;