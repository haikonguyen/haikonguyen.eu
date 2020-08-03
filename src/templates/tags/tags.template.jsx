import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Hero from "../../components/hero/hero.component";
import Layout from "../../components/layout/layout.component";
import PostListing from "../../components/post-listing/post-listing.component";
import config from "../../../data/SiteConfig";
import StyledTagWrap from "./tags.style";

const TagTemplate = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const {
    posts: { edges: postEdges },
    hero
  } = data;

  return (
    <Layout>
      <Hero isHome={false} fluid={hero.childImageSharp.fluid}>
        <h1>{tag.toUpperCase()}</h1>
      </Hero>
      <StyledTagWrap className="container">
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <PostListing postEdges={postEdges} />
      </StyledTagWrap>
    </Layout>
  );
};

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___slug], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      totalCount
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
    hero: file(relativePath: { eq: "blogPage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2600, maxHeight: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default TagTemplate;
