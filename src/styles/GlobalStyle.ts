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
    font-size: 16px;
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
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  :root {
    --color-white: #fff;
    --color-black: #000;
    --color-background: #0F100F;
    /* button */
    --color-background-button: #00DB84;
    /* input */
    --color-background-input: #3C3E3D;
    --color-placeholder-input: #777A77;
    /* sidebar */
    --color-text-sidebar: #777A77;
    --color-text-sidebar-hover: #B2B8B2;
    --color-background-sidebar-active: #4F524F;
    --color-background-sidebar-hover: #3B3D3B;
    --color-background-sidebar: #1E1F1E;
  }
`
