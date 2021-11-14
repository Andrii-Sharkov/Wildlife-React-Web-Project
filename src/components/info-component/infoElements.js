import styled from "styled-components";

export const InfoSection = styled.section`
  background: black;
  height: 50vh;

  @media (max-width: 768px) {
    height: 65vh;
  }

  @media (max-width: 414px) {
    height: 87vh;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 0 auto;
  padding: 50px 0;

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 414px) {
    width: 350px;
  }
`;

export const InfoTitle = styled.h4`
  font-size: 2.3rem;
  font-family: 'Poppins', sans-serif;
  color: white;
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const InfoSubtitle = styled.p`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  line-height: 1.3;
  margin: 30px 0;
  text-align: center;

  @media (max-width: 414px) {
    line-height: 1.2;
  }
`;