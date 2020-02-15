import React from 'react';
import Container from '@material-ui/core/Container';
import ScrollableAnchor from 'react-scrollable-anchor';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Hero from '../components/Hero/Hero.component';
import MainLayout from '../layout/index';
import PostListing from '../components/PostListing/PostListing';

const StyledHeading1 = styled.div`
  margin-bottom: 20px;

  .styledH1 {
    color: ${props => props.theme.colors.primaryThemeColor};
  }

  .styledHr {
    border: 1px solid ${props => props.theme.colors.primaryThemeColor};
    width: 80px;
    margin: 0 auto;
    margin-top: 10px;
  }
`;

const Home = ({ data }) => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero />
      <Container fixed>
        {/* About Sections */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ScrollableAnchor id='about'>
              <StyledHeading1>
                <Typography
                  variant='h4'
                  component='h1'
                  gutterBottom
                  align='center'
                  className='styledH1'
                >
                  About
                </Typography>
                <hr className='styledHr' />
              </StyledHeading1>
            </ScrollableAnchor>
          </Grid>
        </Grid>
        {/* Blog Sections */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <StyledHeading1>
              <Typography
                variant='h4'
                component='h1'
                gutterBottom
                align='center'
                className='styledH1'
              >
                Latest Posts
              </Typography>
              <hr className='styledHr' />
            </StyledHeading1>
          </Grid>
          <Grid item xs={12}>
            <ScrollableAnchor id='blog'>
              <PostListing data={data} />
            </ScrollableAnchor>
          </Grid>
        </Grid>
        {/* Portfolio Sections */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ScrollableAnchor id='portfolio'>
              <StyledHeading1>
                <Typography
                  variant='h4'
                  component='h1'
                  gutterBottom
                  align='center'
                  className='styledH1'
                >
                  Portfolio
                </Typography>
                <hr className='styledHr' />
              </StyledHeading1>
            </ScrollableAnchor>
          </Grid>
        </Grid>
        {/* Instagram Sections */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ScrollableAnchor id='instagram'>
              <StyledHeading1>
                <Typography
                  variant='h4'
                  component='h1'
                  gutterBottom
                  align='center'
                  className='styledH1'
                >
                  Instagram
                </Typography>
                <hr className='styledHr' />
              </StyledHeading1>
            </ScrollableAnchor>
          </Grid>
        </Grid>
        {/* Contact Sections */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ScrollableAnchor id='contact'>
              <StyledHeading1>
                <Typography
                  variant='h4'
                  component='h1'
                  gutterBottom
                  align='center'
                  className='styledH1'
                >
                  Contact
                </Typography>
                <hr className='styledHr' />
              </StyledHeading1>
            </ScrollableAnchor>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default Home;
