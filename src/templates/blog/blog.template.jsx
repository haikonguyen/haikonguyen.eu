import React, { useState } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import TextField from "@material-ui/core/TextField";
import { navigate } from "@reach/router";
import Layout from "../../components/layout/layout.component";
import Hero from "../../components/hero/hero.component";
import config from "../../../data/SiteConfig";
import StyledSearchSection from "./blog.style";
import PostListing from "../../components/post-listing/post-listing.component";
import CustomBtn from "../../components/materialui/button.component";

const BlogPage = ({ data }) => {
  const {
    blog: { edges: postEdges, group },
    hero
  } = data;

  const tags = group;
  const [searchField, setSearchField] = useState("");

  const handleChange = event => {
    const { value } = event.target;

    setSearchField(value);
  };

  const filteredPosts = postEdges.filter(post =>
    post.node.frontmatter.title
      .toLowerCase()
      .includes(searchField.toLowerCase())
  );

  const filteredCount = filteredPosts.length;

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <Hero isHome={false} fluid={hero.childImageSharp.fluid}>
        <h1>BLOG</h1>
      </Hero>
      <StyledSearchSection className="container container--fixed">
        <div className="searchSection">
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
            onChange={() => handleChange(event)}
          />
          <span>{filteredCount}</span>
        </div>

        <div className="categorySection">
          {tags.map(tag => {
            return (
              <CustomBtn
                onClick={() =>
                  navigate(`/tags/${tag.fieldValue.toLowerCase()}`)
                }
                text={tag.fieldValue}
                size="small"
                key={tag.fieldValue}
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
    blog: allMarkdownRemark(
      sort: { fields: [fields___slug], order: DESC }
      filter: { frontmatter: { templateKey: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
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
      group(field: frontmatter___tags) {
        fieldValue
      }
    }

    hero: file(relativePath: { eq: "blogPage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2600, maxHeight: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default BlogPage;
