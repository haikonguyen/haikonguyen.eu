import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navigation from '../components/Navigation/Navigation.component';
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
  }

  a:-webkit-any-link {
    text-decoration: none;
  }
  
`;

const MainLayout = props => {
  const { children } = props;
  const [lightTheme, setLightTheme] = useState(false);

  const themeToggler = () => {
    !lightTheme ? setLightTheme(true) : setLightTheme(false);
  };

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
      <Navigation lightTheme={lightTheme} themeToggler={themeToggler} />
      <GoUp />

      {/* Templates & Pages */}
      {children}
    </ThemeProvider>
  );
};

export default MainLayout;
