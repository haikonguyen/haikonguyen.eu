import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import TextField from '@material-ui/core/TextField';
import Layout from '../components/layout/layout.component';
import Hero from '../components/hero/hero.component';
import config from '../../data/SiteConfig';
import { StyledSearchSection } from './blog.style';
import blogHero from '../img/blogPage.jpg';
import PostListing from '../components/post-listing/post-listing.component';

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

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <Hero bgImage={blogHero}>
        <h1>Blog</h1>
      </Hero>
      <StyledSearchSection className='container container--fixed'>
        <TextField
          id='outlined-search'
          label='Search'
          type='search'
          variant='outlined'
          onChange={() => handleChange(event)}
        />
        <div className='category-container'>
          {categories.map((category) => {
            return (
              <Link
                to={`/categories/${category.fieldValue.toLowerCase()}`}
                className='category-filter'
                key={category.fieldValue}
              >
                {category.fieldValue}
              </Link>
            );
          })}
        </div>
      </StyledSearchSection>
      <PostListing postEdges={filteredPosts} />
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
          }
          id
        }
      }
    }
    category: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default BlogPage;
