import React, { useContext } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import config from "../../data/SiteConfig";
import Layout from "../components/layout/layout.component";
import Hero from "../components/hero/hero.component";
import { UiContext } from "../context/ui.context";
import StyledForm from "./contact.style";
import CustomBtn from "../components/materialui/button.component";

const ContactPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges }
  } = data;

  const {
    node: {
      frontmatter: { title, aboutHero }
    }
  } = edges[0];

  const uiContext = useContext(UiContext);
  const { isHome } = uiContext;

  return (
    <Layout>
      <div className="contact-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <Hero isHome={isHome} fluid={aboutHero.childImageSharp.fluid}>
          <h1>{title}</h1>
        </Hero>
        <StyledForm className="container--fixed mt5-l mt4 mb5-l mb4">
          <Paper className="flex justify-center" elevation={3}>
            <form
              className="w-100 formWrapper pt2 pb2 pt5-l pb5-l"
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="standard-required"
                label="Your Name:"
                defaultValue=""
                className="contactInput"
              />
              <TextField
                required
                id="standard-required"
                label="Your Email:"
                defaultValue=""
                className="contactInput"
              />
              <div className="contactInput textAreaWrapper flex items-center flex-column">
                <label className="w-100">Your Message:</label>
                <textarea name="message" required="" spellCheck="false" />
              </div>
              <div className="w-100 flex justify-end">
                <CustomBtn
                  onClick={() => console.log("submit")}
                  text="Send"
                  variant="contained"
                  size="large"
                  color="primary"
                />
              </div>
            </form>
          </Paper>
        </StyledForm>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Contact {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "about" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            aboutHero {
              childImageSharp {
                fluid(maxWidth: 2600, maxHeight: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          html
        }
      }
    }
  }
`;

export default ContactPage;
