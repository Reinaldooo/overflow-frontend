import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #2d2f31;
    color: #fff;
  }

  body, input, button {
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, strong {
    font-weight: 700
  }

  button {
    cursor: pointer;
  }
`;
