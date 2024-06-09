import { gsap } from 'gsap';
import { LegacyRef, useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';

const theme: DefaultTheme = {
  colors: {
    primary: '#101010',
    secondary: '#DB574D',
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactLenis root>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ReactLenis>
  );
};

export default Layout;
