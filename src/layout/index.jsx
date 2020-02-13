import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Navigation from '../components/Navigation/Navigation.component';
import DarkTheme from '../themes/dark.theme';
import config from '../../data/SiteConfig';
import SEO from '../components/SEO/SEO';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.bodyTextColor}
  }
  
  .anchorDiv {
    min-height: 500px;
  }
`;

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={DarkTheme}>
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
        <Navigation />

        {/* Templates & Pages */}
        {children}
      </ThemeProvider>
    );
  }
}
