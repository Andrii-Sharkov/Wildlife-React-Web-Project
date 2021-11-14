import styled from 'styled-components';

export const ExploreSection = styled.section`
  background: black;
  height: 90vh;

  @media (max-width: 1024px) {
    height: 152vh;
  }

  @media (max-width: 768px) {
    height: 220vh;
  }

  @media (max-width: 414px) {
    height: 205vh;
  }
`;

export const ExploreContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ExploreTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 650px;

  @media (max-width: 540px) {
    width: 500px;
  }

  @media (max-width: 414px) {
    width: 350px;
  }
`;

export const ExploreTitle = styled.h2`
  font-size: 3rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 4px;
  color: white;

  @media (max-width: 414px) {
    font-size: 2rem;
  }
`;

export const ExploreSubtitle = styled.p`
  color: white;
  font-size: 1.4rem;
  line-height: 1.5;
  margin: 25px 0 35px 0;
  text-align: center;

  @media (max-width: 414px) {
    font-size: 1.2rem;
    line-height: 1.2;
  }
`;

export const ExploreImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    row-gap: 20px;
  }
`;

export const Column = styled.div`
  width: 400px;
  height: 550px;
  position: relative;
  overflow: hidden;

  @media (max-width: 414px) {
    width: 350px;
    height: 500px;
  }

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Description = styled.p`
  color: white;
  padding: 0 15px;
  position: absolute;
  left: 15px;
  bottom: 10%;
  font-size: 1.2rem;
  font-family: 'Ubuntu', sans-serif; 
`;