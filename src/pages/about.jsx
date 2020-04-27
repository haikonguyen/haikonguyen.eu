import React, { useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Article from '../components/article/article.component';
import { UiContext } from '../context/ui.context';
import config from '../../data/SiteConfig';
import Layout from '../components/layout/layout.component';
import aboutBg from '../img/aboutPageOptimal.jpg';
import Hero from '../components/hero/hero.component';

const AboutPage = ({ data, location: { pathname } }) => {
  const uiContext = useContext(UiContext);
  const { isHome, isHomePage } = uiContext;
  const aboutData = data.allMarkdownRemark.edges[0].node.frontmatter;
  const mainText = data.allMarkdownRemark.edges[0].node.html;
  const { title } = aboutData;

  useEffect(() => {
    isHomePage(pathname);
  });
  return (
    <Layout>
      <div className='about-container'>
        <Helmet title={`About | ${config.siteTitle}`} />
        <Hero isHome={isHome} bgImage={aboutBg}>
          <h1>{title}</h1>
        </Hero>
        <Article postHtml={mainText} aboutStyle />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query AboutPageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "about-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            aboutHero {
              childImageSharp {
                fluid(maxWidth: 2400) {
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

export default AboutPage;
