import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Hero from '../../components/hero/hero.component';
import Layout from '../../components/layout/layout.component';
import PostListing from '../../components/post-listing/post-listing.component';
import config from '../../../data/SiteConfig';
import StyledTagWrap from './tag.style';
import blogHero from '../../img/blogPage.jpg';
import { UiContext } from '../../context/ui.context';

const TagTemplate = ({ data, pageContext, location: { pathname } }) => {
  const { tag } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  const uiContext = useContext(UiContext);
  const { isHome, isHomePage } = uiContext;

  isHomePage(pathname);

  return (
    <Layout>
      <Hero isHome={isHome} bgImage={blogHero}>
        <h1>{tag.toUpperCase()}</h1>
      </Hero>
      <StyledTagWrap className='container'>
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <PostListing postEdges={postEdges} />
      </StyledTagWrap>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      totalCount
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
            date
            cover {
              childImageSharp {
                fluid(maxWidth: 345, maxHeight: 140) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          id
        }
      }
    }
  }
`;

export default TagTemplate;