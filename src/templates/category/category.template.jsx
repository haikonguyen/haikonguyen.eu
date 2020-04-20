import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PostListing from '../../components/post-listing/post-listing.component';
import config from '../../../data/SiteConfig';
import Layout from '../../components/layout/layout.component';
import StyledCategoryWrap from './category.style';
import Hero from '../../components/hero/hero.component';
import blogHero from '../../img/blogPage.jpg';
import { UiContext } from '../../context/ui.context';

const CategoryTemplate = ({ data, pageContext, location: { pathname } }) => {
  const { category } = pageContext;
  const postEdges = data.allMarkdownRemark.edges;
  const uiContext = useContext(UiContext);
  const { isHome, isHomePage } = uiContext;

  isHomePage(pathname);

  return (
    <Layout>
      <Hero isHome={isHome} bgImage={blogHero}>
        <h1>{category.toUpperCase()}</h1>
      </Hero>
      <StyledCategoryWrap className='container container--fixed'>
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        <PostListing postEdges={postEdges} />
      </StyledCategoryWrap>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
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

export default CategoryTemplate;
