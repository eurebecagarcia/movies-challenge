import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% / 5);
  height: auto;
  border-radius: 8px;

  img {
    width: 100%;
    height: 70%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  h3 {
    margin: 8px 0 0 8px;
  }

  p {
    width: 95%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 8px 0 0 8px;
  }
`;
