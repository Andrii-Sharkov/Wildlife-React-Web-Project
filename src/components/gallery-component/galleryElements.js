import styled from "styled-components";

export const GallerySection = styled.section`
  background: black;
  height: 50vh;

  @media (max-width: 768px) {
    height: 75vh;
  }

  @media (max-width: 414px) {
    height: 200vh;
  }

  @media (max-width: 375px) {
    height: 180vh;
  }

  @media (max-width: 360px) {
    height: 175vh;
  }
`;

export const GalleryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  column-gap: 15px;
  padding: 70px 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    margin: 0 20px;
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryColumn = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;