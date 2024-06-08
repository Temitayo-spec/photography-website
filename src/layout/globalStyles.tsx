import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --font-mono: 'Clash Display', sans-serif;
    --max-width: 1440px;

    //colors
    --primary: ${({ theme }) => theme.colors.primary};
    --secondary: ${({ theme }) => theme.colors.secondary};
    --border-secondary: #000;
    --border-default: rgba(16, 16, 16, 0.1);
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: var(--font-mono);
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    color: var(--primary);
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
