import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor';
import Grid from '@material-ui/core/Grid';
import Hero from '../components/Hero/Hero.component';
import MainLayout from '../layout/index';

const Home = () => {
  return (
    <MainLayout>
      {/* Main Sections */}
      <Hero />

      {/* Main Sections */}
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ScrollableAnchor id='about'>
              <div className='anchorDiv'>About</div>
            </ScrollableAnchor>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ScrollableAnchor id='blog'>
              <div className='anchorDiv'>Blog</div>
            </ScrollableAnchor>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ScrollableAnchor id='portfolio'>
              <div className='anchorDiv'>Portfolio</div>
            </ScrollableAnchor>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ScrollableAnchor id='contact'>
              <div className='anchorDiv'>Contact</div>
            </ScrollableAnchor>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ScrollableAnchor id='instagram'>
              <div className='anchorDiv'>Instagram</div>
            </ScrollableAnchor>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default Home;
