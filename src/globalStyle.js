import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Open Sans', sans-serif;
    }
    body{
        background: #212121;
        color: #fff;

    }
`;

export default GlobalStyle;
