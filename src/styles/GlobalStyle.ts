import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background: var(--color-background);
    color: var(--color-white);
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

    /* width */
    ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 9999px;
    background: var(--color-background-input);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-placeholder-input);
  }

  :root {
    --color-white: #dfe3e6;
    --color-black: #000;

    --color-background: #1d222c;
    /* button */
    --color-background-button: rgb(73,141,242);
    /* input */
    --color-background-input: #29303f;
    --color-placeholder-input: #707a8c;
    /* sidebar */
    --color-text-sidebar: #707a8c;
    --color-text-sidebar-hover: #707a8c;
    --color-background-sidebar-active: #29303f;
    --color-background-sidebar-hover: #29303f;
    --color-background-sidebar: #191d26;
  }
`
