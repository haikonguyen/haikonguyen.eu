import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Navigation from '../components/Navigation/Navigation.component';
import DarkTheme from '../themes/dark.theme';
import config from '../../data/SiteConfig';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.bodyTextColor}
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

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper>xs=12</Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>xs=3</Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}
