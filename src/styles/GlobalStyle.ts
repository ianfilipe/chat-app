import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border
  }

  html, body, #root {
    background: var(--color-background);
    color: var(--color-white);
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: sans-serif;
    font-size: 14px;
  }

  :root {
    --color-white: #fff;
    --color-black: #000;
    --color-background-button: #00DB84;
    --color-background-input: #3C3E3D;
    --color-background: #0F100F;
  }
`;
