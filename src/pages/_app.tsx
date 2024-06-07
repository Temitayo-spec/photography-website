import GlobalStyle from "@/layout/globalStyles";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, type DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#101010',
    secondary: '#DB574D',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
