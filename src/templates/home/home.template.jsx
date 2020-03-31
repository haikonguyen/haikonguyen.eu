import React from 'react';
import { navigate } from '@reach/router';
import CustomBtn from '../../components/MaterialUi/Button.component';
import profileimg from '../../images/HaikoProfile.jpg';
import Hero from '../../components/Hero/Hero.component';
import Layout from '../../layout/index';
import PostListing from '../../components/PostListing/PostListing';
import StyledMain from './home.style';

const Home = () => {
  return (
    <Layout>
      <StyledMain>
        {/* Hero Section */}
        <Hero />
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
              <CustomBtn
                onClick={() => navigate('/about')}
                text='Read My Story'
                variant='outlined'
                color='primary'
              />
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
