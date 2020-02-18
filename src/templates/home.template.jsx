import React from 'react';
import Container from '@material-ui/core/Container';
import { Element } from 'react-scroll';
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
            <Element name='about'>
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
            </Element>
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
            <Element name='blog'>
              <PostListing data={data} />
            </Element>
          </Grid>
        </Grid>
        {/* Portfolio Sections */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Element name='portfolio'>
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
            </Element>
          </Grid>
        </Grid>
        {/* Instagram Sections */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Element name='instagram'>
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
            </Element>
          </Grid>
        </Grid>
        {/* Contact Sections */}
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Element name='contact'>
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
            </Element>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default Home;
