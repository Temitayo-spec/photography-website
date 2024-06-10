import { ReactLenis } from 'lenis/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { Footer, Navbar, Topbar } from '@/components';
import { useState } from 'react';

const theme: DefaultTheme = {
  colors: {
    primary: '#101010',
    secondary: '#DB574D',
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <ReactLenis root>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Topbar setOpenNav={setOpenNav} openNav={openNav} />
        <Navbar openNav={openNav} />
        {children}
        <Footer />
      </ThemeProvider>
    </ReactLenis>
  );
};

export default Layout;
