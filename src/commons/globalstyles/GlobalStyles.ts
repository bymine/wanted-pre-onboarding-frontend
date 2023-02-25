import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        scroll-behavior: smooth;
        
    }

    body{
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #4070f4;
    }
`;

export default GlobalStyle;
