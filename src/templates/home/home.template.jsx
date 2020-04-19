import React from 'react';
import { navigate } from '@reach/router';
import { graphql } from 'gatsby';
import Divider from '@material-ui/core/Divider';
import CustomBtn from '../../components/materialui/button.component';
import profileImg from '../../img/HaikoProfile.jpg';
import profileImg2 from '../../img/HaikoProfile2.jpg';
import Hero from '../../components/hero/hero.component';
import Layout from '../../components/layout/layout.component';
import PostListing from '../../components/post-listing/post-listing.component';
import StyledMain from './home.style';
import config from '../../../data/SiteConfig';
import bgSrc from '../../img/PragueCastle01_opti.jpg';

const Home = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <StyledMain>
        {/* Hero Section */}
        <Hero bgImage={bgSrc} className='homeHero'>
          <div className='homeHero__profileWrap'>
            <section className='homeHero__profileWrap__header'>
              <img src={profileImg} alt='The Avatar' />
            </section>
            <section className='homeHero__profileWrap__description'>
              <h1>{config.siteTitle}</h1>
              <p>WEB DEVELOPER, PHOTOGRAPHER,&nbsp;VLOGGER</p>
            </section>
            <section className='homeHero__profileWrap__buttons'>
              <CustomBtn
                onClick={() => console.log('Do something later')}
                text='Contact Me'
                variant='contained'
                size='large'
                color='primary'
              />
            </section>
          </div>
        </Hero>
        {/* About Section */}
        <section className='sections'>
          <div className='sections__heading'>
            <h1>About</h1>
            <hr />
          </div>
          <div className='about container--fixed'>
            <div>
              <div className='profilePictureWrap'>
                <img
                  className='profilePicture'
                  src={profileImg2}
                  alt='profile avatar'
                />
                <div className='profilePicture--designElement' />
              </div>
            </div>
            <div>
              <h2>HI, I'M HAIKO</h2>
              <p>
                Hello there! Welcome to my personal blog. I am a Web Developer,
                Vlogger and Travel photographer based in Prague. I am passionate
                about photography, web development and movie creation.
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
        <Divider className='container--fixed' />
        {/* Blog Section */}
        <section className='sections sections__blog'>
          <div className='sections__heading'>
            <h1>Latest Posts</h1>
            <hr />
          </div>
          <PostListing postEdges={postEdges} />

          <div className='container container--fixed sections__blog__btn'>
            <CustomBtn
              onClick={() => navigate('/blog')}
              text='Read More'
              variant='outlined'
              color='primary'
            />
          </div>
        </section>
      </StyledMain>
    </Layout>
  );
};

export const pageQuery = graphql`
  query HomeQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover {
              childImageSharp {
                fluid(maxWidth: 345, maxHeight: 140) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            date
          }
          id
        }
      }
    }
  }
`;

export default Home;
