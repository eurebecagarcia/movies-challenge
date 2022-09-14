import styled from "styled-components";

export const Menu = styled.nav`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  padding: 35px;
  justify-content: space-between;

  img {
    width: 150px;
  }

  ul {
    display: flex;
    gap: 40px;
    list-style: none;

    a {
      text-decoration: none;
    }

    li {
      font-size: 18px;
      color: #fff;
    }
  }
`;

export const InputBox = styled.form`
  background: #404040;
  border-radius: 8px;
  padding: 8px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: none;
    background-color: transparent;
  }
`;
