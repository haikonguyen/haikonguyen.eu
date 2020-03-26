import React, { useState, useContext } from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { ThemeContext } from '../context/theme.context';
import Nav from '../components/Navigation/Navigation.component';
import GoUp from '../components/Navigation/goup.component';
import DarkTheme from '../themes/dark.theme';
import LightTheme from '../themes/light.theme';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO/SEO';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.bodyTextColor};
    outline: none;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  a:-webkit-any-link {
    text-decoration: none;
  }
  
`;

const Layout = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  const { lightTheme, themeToggler } = themeContext;
  const [showOnScroll, setShowOnScroll] = useState(false);

  useScrollPosition(({ currPos }) => {
    currPos.y < -150 ? setShowOnScroll(true) : setShowOnScroll(false);
  });

  return (
    <ThemeProvider theme={lightTheme ? LightTheme : DarkTheme}>
      <GlobalStyle />
      <Helmet title={config.siteTitle}>
        <meta name='description' content={config.siteDescription} />
        <html lang='en' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
        />
      </Helmet>
      <SEO />
      <Nav
        showOnScroll={showOnScroll}
        lightTheme={lightTheme}
        themeToggler={themeToggler}
      />
      {/* Templates & Pages */}
      {children}
      <GoUp lightTheme={lightTheme} showOnScroll={showOnScroll} />
    </ThemeProvider>
  );
};

export default Layout;
