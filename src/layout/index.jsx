import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/Navigation/Navigation.component';
import Hero from '../components/Hero/Hero.component';
import DarkTheme from '../themes/dark.theme';
import config from '../../data/SiteConfig';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.bodyTextColor}
  }
  
  .anchorDiv {
    height: 500px;
  }
`;

export default class MainLayout extends React.Component {
  render() {
    return (
      <ThemeProvider theme={DarkTheme}>
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

        {/* Main Sections */}
        <Hero />

        {/* Main Sections */}
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ScrollableAnchor id='section1'>
                <div className='anchorDiv'>About</div>
              </ScrollableAnchor>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ScrollableAnchor id='section2'>
                <div className='anchorDiv'>About</div>
              </ScrollableAnchor>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ScrollableAnchor id='section3'>
                <div className='anchorDiv'>About</div>
              </ScrollableAnchor>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ScrollableAnchor id='section4'>
                <div className='anchorDiv'>About</div>
              </ScrollableAnchor>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ScrollableAnchor id='section5'>
                <div className='anchorDiv'>About</div>
              </ScrollableAnchor>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }
}
