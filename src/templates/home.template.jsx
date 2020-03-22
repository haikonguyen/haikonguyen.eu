import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import CustomBtn from '../components/MaterialUi/Button.component';
import profileimg from '../images/HaikoProfile.jpg';
import Hero from '../components/Hero/Hero.component';
import Layout from '../layout/index';
import PostListing from '../components/PostListing/PostListing';

const StyledMain = styled.main`
  .sections {
    padding: ${rem('70px')} ${rem('15px')};

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
  }

  .about {
    display: grid;
    grid-gap: ${rem('50px')};
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    max-width: ${rem('1140px')};
    margin: 0 auto;
    align-items: flex-start;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: ${rem('10px')};
    }

    @media ${props => props.theme.screen.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const Home = ({ showOnScroll }) => {
  return (
    <Layout>
      <StyledMain>
        {/* Hero Section */}
        <Hero showOnScroll={showOnScroll} />
        {/* About Section */}
        <section className='sections'>
          <div className='heading'>
            <h1>About</h1>
            <hr />
          </div>
          <div className='about'>
            <div>
              <div className='profilePictureWrap'>
                <img
                  className='profilePicture'
                  src={profileimg}
                  alt='profile avatar'
                />
                <div className='profilePicture--designElement' />
              </div>
            </div>
            <div>
              <h2>HI, I'M HAIKO</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <CustomBtn text='Read My Story' />
            </div>
          </div>
        </section>
        {/* Blog Section */}
        <section className='sections'>
          <div className='heading'>
            <h1>About</h1>
            <hr />
          </div>
          <PostListing />
        </section>
      </StyledMain>
    </Layout>
  );
};

export default Home;
