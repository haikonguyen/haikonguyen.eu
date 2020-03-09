import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { rem } from 'polished';
import CustomBtn from '../components/MaterialUi/Button.component';
import profileimg from '../images/HaikoProfile.jpg';
import Hero from '../components/Hero/Hero.component';
import MainLayout from '../layout/index';
import PostListing from '../components/PostListing/PostListing';

const StyledFixedContainer = styled(Container)`
  padding: ${rem('70px')} 0 !important;

  .heading {
    padding-bottom: ${rem('70px')};

    h1 {
      color: ${props => props.theme.colors.white};
      text-align: center;
      margin: 0;
      text-transform: uppercase;
    }

    hr {
      border: ${rem('1px')} solid
        ${props => props.theme.colors.primaryThemeColor};
      width: ${rem('100px')};
      margin: 0 auto;
      margin-top: ${rem('10px')};
    }
  }
`;

const StyledFluidContainer = styled(Container)`
  .col {
    margin-bottom: ${rem('30px')};
  }
  .about {
    h2 {
      font-size: ${rem('25px')};
    }
    .profilePicture {
      width: 100%;
      position: relative;
      z-index: 10;
      border-radius: ${rem('10px')};

      &--designElement {
        display: none;
        border: 1px solid white;
        height: ${rem('350px')};
        width: ${rem('350px')};
        position: absolute;
        top: ${rem('-22px')};
        left: ${rem('-10px')};
        border-radius: ${rem('10px')};

        @media ${props => props.theme.screen.desktop} {
          display: block;
        }
      }
    }
  }
`;

const Home = ({ showOnScroll, data }) => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <Hero showOnScroll={showOnScroll} />

      {/* About Section */}
      <StyledFluidContainer fluid>
        <Row>
          <StyledFixedContainer className='about'>
            <Col xs={12}>
              <div className='heading'>
                <h1>About</h1>
                <hr />
              </div>
              <Row>
                <Col xs={12} md={5}>
                  <div className='profilePictureWrap'>
                    <img
                      className='profilePicture'
                      src={profileimg}
                      alt='profile avatar'
                    />
                    <div className='profilePicture--designElement' />
                  </div>
                </Col>
                <Col xs={12} offset={{ md: 1 }} md={6}>
                  <h2>HI, I'M HAIKO</h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                  <CustomBtn text='Read My Story' />
                </Col>
              </Row>
            </Col>
          </StyledFixedContainer>
        </Row>

        <Row>
          {/* Blog Section */}
          <StyledFixedContainer className='blog'>
            <Col xs={12}>
              <div className='heading'>
                <h1>Blog</h1>
                <hr />
              </div>
              <PostListing data={data} />
            </Col>
          </StyledFixedContainer>
        </Row>
      </StyledFluidContainer>
    </MainLayout>
  );
};

export default Home;
