import { ReactLenis } from 'lenis/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { Footer, Navbar, Preloader, Topbar } from '@/components';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';

const theme: DefaultTheme = {
  colors: {
    primary: '#101010',
    secondary: '#DB574D',
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [openNav, setOpenNav] = useState(false);

  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setPlayAnimation(true);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 1500);
    })();
  }, []);

  return (
    <RecoilRoot>
      <ReactLenis root>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Preloader playAnimation={playAnimation} />

          <Topbar setOpenNav={setOpenNav} openNav={openNav} />
          <Navbar openNav={openNav} />
          {children}
          <Footer />
        </ThemeProvider>
      </ReactLenis>
    </RecoilRoot>
  );
};

export default Layout;
