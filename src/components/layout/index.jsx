import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { rem } from 'polished';
import { ThemeContext } from '../../context/theme.context';
import { UiContext } from '../../context/ui.context';
import Nav from '../Navigation/Navigation.component';
import GoUp from '../Navigation/goup.component';
import DarkTheme from '../../themes/dark.theme';
import LightTheme from '../../themes/light.theme';
import config from '../../../data/SiteConfig';
import SEO from '../SEO/SEO';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.bodyTextColor};
    outline: none;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  h1 {
      font-size:  ${rem('25px')};

      @media ${(props) => props.theme.screen.tablet} {
        font-size:  ${rem('35px')};
      }
  }

  h2 {
      font-size:  ${rem('22px')};

      @media ${(props) => props.theme.screen.tablet} {
        font-size:  ${rem('29px')};
      }
  }

  h3 {
      font-size:  ${rem('20px')};

      @media ${(props) => props.theme.screen.tablet} {
        font-size:  ${rem('25px')};
      }
  }

  h4 {
      font-size:  ${rem('18px')};

      @media ${(props) => props.theme.screen.tablet} {
        font-size:  ${rem('22px')};
      }
  }

  a:-webkit-any-link {
    text-decoration: none;
  }

  .MuiButton-root {
    && {
      color: ${(props) => props.theme.colors.navLinks};

      &:hover {
        background-color: ${(props) => props.theme.colors.MuiButtonRootHover}
      }
    }
  }

  .MuiButton-outlinedPrimary {
    && {
      color: ${(props) => props.theme.colors.primaryThemeColor};
      border: 1px solid ${(props) => props.theme.colors.primaryThemeColor};

      &:hover {
        border: 1px solid #90caf9;
        background-color: rgba(144, 202, 249, 0.08);
      }
    }
  } 

  .MuiIconButton-root {
    && {

      &:hover {
        background-color: ${(props) => props.theme.colors.MuiButtonRootHover}
      }
    }
  }
  
`;

const Layout = ({ children }) => {
  const themeContext = useContext(ThemeContext);
  const { lightTheme, themeToggler } = themeContext;
  const uiContext = useContext(UiContext);
  const { showOnScroll } = uiContext;

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
