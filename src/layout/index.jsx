import React from 'react';
import Helmet from 'react-helmet';
import styled, { createGlobalStyle } from 'styled-components';
import config from '../../data/SiteConfig';
import Navigation from '../components/Navigation/Navigation.component';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

const StyledLayout = styled.div`
  color: red;
`;

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <StyledLayout>
        <GlobalStyle />
        <Helmet>
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
        <Navigation />
        {children}
      </StyledLayout>
    );
  }
}
