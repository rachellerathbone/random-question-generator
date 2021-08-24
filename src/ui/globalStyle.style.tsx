import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
      box-sizing: border-box;
    }

    *,
    ::before,
    ::after {
      box-sizing: inherit;
    }

    body {
      font-family: 'Roboto', sans-serif;
      --primary-color: #02bfb6;
      --secondary-color: #5702C0;
      --tertiary-color: #6AC002;
      --border-radius: 3px;
      margin: 0 2em;

      // Medium devices
      @media (min-width: 768px) {
        margin: 0 4em;
      }

      // Large devices
      @media (min-width: 992px) {
        margin: 0 7em;
      }

      // Extra large devices
      @media (min-width: 1200px) {
        margin: 0 12em;
      }
    }

    p, h6 {
      margin: 0;
    }
`;
