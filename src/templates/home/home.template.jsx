import React, { useContext, useEffect } from 'react';
import { navigate } from '@reach/router';
import { graphql } from 'gatsby';
import Divider from '@material-ui/core/Divider';
import { UiContext } from '../../context/ui.context';
import CustomBtn from '../../components/materialui/button.component';
import profileImg from '../../img/HaikoProfile.jpg';
import profileImg2 from '../../img/HaikoProfile2.jpg';
import Hero from '../../components/hero/hero.component';
import Layout from '../../components/layout/layout.component';
import PostListing from '../../components/post-listing/post-listing.component';
import StyledMain from './home.style';
import config from '../../../data/SiteConfig';
import bgSrc from '../../img/PragueCastle01_opti.jpg';

const Home = ({ data, location: { pathname } }) => {
  const postEdges = data.allMarkdownRemark.edges;
  const uiContext = useContext(UiContext);
  const { isHome, isHomePage } = uiContext;

  useEffect(() => {
    isHomePage(pathname);
  });

  return (
    <Layout>
      <StyledMain>
        {/* Hero Section */}
        <Hero isHome={isHome} bgImage={bgSrc} className='homeHero'>
          <div className='homeHero__profileWrap'>
            <section className='homeHero__profileWrap__header'>
              <img src={profileImg} alt='The Avatar' />
            </section>
            <section className='homeHero__profileWrap__description'>
              <h1>{config.siteTitleAlt}</h1>
              <p>FRONT-END DEVELOPER, PHOTOGRAPHER,&nbsp;VLOGGER</p>
            </section>
            <section className='homeHero__profileWrap__buttons'>
              <CustomBtn
                onClick={() => isHomePage(pathname)}
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
                Hello dear friend! Welcome to my personal blog. On this site you
                you can find my latest post primarly about things that are
                dearest to my heart.
              </p>
              <p>
                The main topics are usually tech related, such as DEVELOPMENT
                (mostly Web, because I'm a web-developer), PHOTOGRAPHY, TRAVEL,
                VLOGS, GAMING and my personal stories.
              </p>
              <p>
                As I am self-taught developer and photographer, I would like to
                share throughout my writings my personal experience, and maybe
                inspire more people to learn in our SUPER FAST PACE WORLD :-).
              </p>
              <p>
                If you want to find out more about my story, be sure to click on
                the button below.
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
