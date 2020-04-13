import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Footer from '../footer/footer.component';
import { ThemeContext } from '../../context/theme.context';
import { UiContext } from '../../context/ui.context';
import Nav from '../navigation/navigation.component';
import GoUp from '../navigation/goup.component';
import DarkTheme from '../../themes/dark.theme';
import LightTheme from '../../themes/light.theme';
import config from '../../../data/SiteConfig';
import SEO from '../seo/seo';
import { GlobalStyle } from './layout.style';

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
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
