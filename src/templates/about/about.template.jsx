import React, { useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import {graphql} from "gatsby";
import Article from '../../components/article/article.component';
import { UiContext } from '../../context/ui.context';
import config from '../../../data/SiteConfig';
import Layout from '../../components/layout/layout.component';
import aboutBg from '../../img/aboutPageOptimal.jpg';
import Hero from '../../components/hero/hero.component';

const AboutPage = ({ location: { pathname }, data }) => {
  const {allMarkdownRemark: {edges}} = data;
  const { node : {frontmatter: {title, aboutHero}, html}} = edges[0];
  const uiContext = useContext(UiContext);
  const { isHome, isHomePage } = uiContext;

  useEffect(() => {
    isHomePage(pathname);
  }, []);

  console.log('dataAbout', data)

  return (
    <Layout>
      <div className='about-container'>
        <Helmet title={`About | ${config.siteTitle}`} />
        <Hero isHome={isHome} bgImage={aboutBg}>
          <h1>{title}</h1>
        </Hero>
        <Article aboutStyle>
          <p dangerouslySetInnerHTML={{ __html: html }} />
        </Article>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query About {
    allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "about"}}}) {
      edges {
        node {
          frontmatter {
            title
            aboutHero {
              childImageSharp {
                fluid(maxWidth: 2600, maxHeight: 1200) {
                  src
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
