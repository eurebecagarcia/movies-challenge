import styled from "styled-components";

export const Container = styled.div`
  background-image: ${(props) => `url(${props.imagem})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 30%;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  h1 {
    font-size: 40px;
    margin: 0 20px;
    text-shadow: -1px -1px 0 #000;
  }
  p {
    width: 60%;
    font-size: 18px;
    line-height: 22px;
    margin: 20px;
    text-shadow: -1px -1px 0 #000;
  }
`;
