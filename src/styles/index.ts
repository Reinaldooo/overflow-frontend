import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #025aa2;
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
