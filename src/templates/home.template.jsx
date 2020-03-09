import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { rem } from 'polished';
import Hero from '../components/Hero/Hero.component';
import MainLayout from '../layout/index';
import PostListing from '../components/PostListing/PostListing';

const StyledContainer = styled(Container)`
  h1 {
    color: ${props => props.theme.colors.white};
    text-align: center;
    margin: 0;
    text-transform: uppercase;
  }

  hr {
    border: ${rem('1px')} solid ${props => props.theme.colors.primaryThemeColor};
    width: ${rem('100px')};
    margin: 0 auto;
    margin-top: ${rem('10px')};
  }

  .section {
    padding: ${rem('70px')} 0;
  }
`;

const Home = ({ showOnScroll, data }) => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero showOnScroll={showOnScroll} />
      <StyledContainer>
        <Row className='section'>
          {/* About Section */}
          <Col xs={12}>
            <h1>About</h1>
            <hr />
          </Col>
        </Row>
        <Row className='section'>
          {/* Blog Section */}
          <Col xs={12}>
            <h1>Blog</h1>
            <PostListing data={data} />
          </Col>
        </Row>
      </StyledContainer>
    </MainLayout>
  );
};

export default Home;
