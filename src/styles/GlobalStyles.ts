import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    min-height: 100%;
    background-color: var(--primary);
  }

  *, button, input {
    border: 0;
    background-color: none;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    color: var(--black);
    transition: color .2s ease-out;
  }

  ul {
    list-style: none;
  }

  :root {
    ${props => {
      const theme = props.theme;

      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      })

      return append;
    }}
  }

  @media (max-width: 760px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 320) {
    html {
      font-size: 12px;
    }
  }

  @media (max-width: 280px) {
    html {
      font-size: 10px;
    }
  }
`;
