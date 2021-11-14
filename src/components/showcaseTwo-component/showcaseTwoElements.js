import styled from "styled-components";

export const ShowcaseTwoSection = styled.section`
  background: black;
  height: 100vh;

  @media (max-width: 768px) {
    height: 80vh;
  }

  @media (max-width: 540px) {
    height: 140vh;
  }

  @media (max-width: 414px) {
    height: 135vh;
  }

  @media (max-width: 375px) {
    height: 125vh;
  }
`; 

export const ShowcaseTwoContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  column-gap: 25px;
  padding: 70px 0;

  @media (max-width: 540px) {
    grid-template-columns: auto;
    row-gap: 20px;
  }
`;

export const ShowcaseTwoColumn = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: 1024px) {
    width: 90%;
    height: 100%;
    margin: auto;
  }

  @media (max-width: 540px) {
    width: 95%;
    height: 100%;
    margin: auto;
  }

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.4s ease-in;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const ShowcaseTwoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  row-gap: 20px;
  width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 414px) {
    width: 350px;
  }
`; 

export const ShowcaseTwoTitle = styled.h5`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 3rem;
  letter-spacing: 4px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ShowcaseTwoSubtitle = styled.p`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.3rem;
  line-height: 1.3;
  margin: 30px 0;
  text-align: center;

  @media (max-width: 414px) {
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;