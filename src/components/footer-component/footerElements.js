import styled from "styled-components";

export const FooterSection = styled.footer`
  background: black;
  height: 8vh;

  @media (max-width: 768px) {
    height: 13vh;
  }

  @media (max-width: 414px) {
    height: 15vh;
  }

  @media (max-width: 375px) {
    height: 18vh;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;

  @media (max-width: 540px) {
    margin: 0 20px;
  }
`;

export const FooterPar = styled.p`
  color: white;
  font-size: 1.5rem;

  span {
    font-size: 1.6rem;
    color: lightseagreen;
    letter-spacing: 2px;
  }
`;