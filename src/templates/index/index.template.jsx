import React from "react";
import { navigate } from "@reach/router";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Divider from "@material-ui/core/Divider";
import CustomBtn from "../../components/materialui/button.component";
import Hero from "../../components/hero/hero.component";
import Layout from "../../components/layout/layout.component";
import PostListing from "../../components/post-listing/post-listing.component";
import StyledMain from "./index.style";
import config from "../../../data/SiteConfig";

const Home = ({ data }) => {
  const {
    latest: { edges: postEdges },
    home: { edges: homeEdge },
    hero
  } = data;
  const {
    node: {
      frontmatter: { aboutSection, latestSection, profileImage, subheading }
    }
  } = homeEdge[0];

  return (
    <Layout>
      <StyledMain>
        {/* Hero Section */}
        <Hero isHome fluid={hero.childImageSharp.fluid} className="homeHero">
          <div className="homeHero__profileWrap">
            <section className="homeHero__profileWrap__header">
              <Img
                fixed={profileImage.childImageSharp.fixed}
                alt="The Avatar"
              />
            </section>
            <section className="homeHero__profileWrap__description">
              <h1>{config.siteTitleAlt}</h1>
              <p>{subheading}</p>
            </section>
            <section className="homeHero__profileWrap__buttons">
              <CustomBtn
                onClick={() => navigate("/contact")}
                text="Contact Me"
                variant="contained"
                size="large"
                color="primary"
              />
            </section>
          </div>
        </Hero>
        {/* About Section */}
        <section className="sections">
          <div className="sections__heading">
            <h1>{aboutSection.title}</h1>
            <hr />
          </div>
          <div className="about container--fixed">
            <div>
              <Img
                className="profilePicture"
                fluid={aboutSection.image.childImageSharp.fluid}
                alt="profile avatar"
              />
              <div className="profilePicture--designElement" />
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{ __html: aboutSection.description }}
              />
              <CustomBtn
                onClick={() => navigate("/about")}
                text="Read My Story"
                variant="outlined"
                color="primary"
              />
            </div>
          </div>
        </section>
        <Divider className="container--fixed" />
        {/* Blog Section */}
        <section className="sections sections__blog">
          <div className="sections__heading">
            <h1>{latestSection.title}</h1>
            <hr />
          </div>
          <PostListing postEdges={postEdges} />
          <div className="container container--fixed sections__blog__btn">
            <CustomBtn
              onClick={() => navigate("/blog")}
              text="Read More"
              variant="outlined"
              color="primary"
            />
          </div>
        </section>
      </StyledMain>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPostAndHome {
    latest: allMarkdownRemark(
      sort: { fields: [fields___slug], order: DESC }
      limit: 3
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
    }
    home: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "index" } } }
    ) {
      edges {
        node {
          frontmatter {
            profileImage {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            subheading
            aboutSection {
              image {
                childImageSharp {
                  fluid(maxWidth: 300, maxHeight: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              title
              description
            }
            latestSection {
              title
            }
          }
        }
      }
    }
    hero: file(relativePath: { eq: "PragueCastle01_opti.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2600, maxHeight: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default Home;
