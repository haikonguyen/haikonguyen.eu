import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import TextField from '@material-ui/core/TextField';
import { navigate } from '@reach/router';
import Layout from '../components/layout/layout.component';
import Hero from '../components/hero/hero.component';
import config from '../../data/SiteConfig';
import StyledSearchSection from './blog.style';
import blogHero from '../img/blogPage.jpg';
import PostListing from '../components/post-listing/post-listing.component';
import CustomBtn from '../components/materialui/button.component';

const BlogPage = ({ data }) => {
  const postEdges = data.allMarkdownRemark.edges;
  const categories = data.category.group;
  const [searchField, setSearchField] = useState('');

  const handleChange = (event) => {
    const { value } = event.target;

    setSearchField(value);
  };

  const filteredPosts = postEdges.filter((post) =>
    post.node.frontmatter.title
      .toLowerCase()
      .includes(searchField.toLowerCase())
  );

  const filteredCount = filteredPosts.length;

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <Hero isHome={false} bgImage={blogHero}>
        <h1>BLOG</h1>
      </Hero>
      <StyledSearchSection className='container container--fixed'>
        <div className='searchSection'>
          <TextField
            id='outlined-search'
            label='Search field'
            type='search'
            variant='outlined'
            onChange={() => handleChange(event)}
          />
          <span>{filteredCount}</span>
        </div>

        <div className='categorySection'>
          {categories.map((category) => {
            return (
              <CustomBtn
                onClick={() =>
                  navigate(`/categories/${category.fieldValue.toLowerCase()}`)
                }
                text={category.fieldValue}
                size='small'
                key={category.fieldValue}
              />
            );
          })}
        </div>
        <PostListing postEdges={filteredPosts} />
      </StyledSearchSection>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
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
            category
          }
          id
        }
      }
    }
    category: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
  }
`;

export default BlogPage;
