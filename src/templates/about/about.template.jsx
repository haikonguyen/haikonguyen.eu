import React, { useContext, useEffect } from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { useTranslation } from "react-i18next";
import Article from "../../components/article/article.component";
import { UiContext } from "../../context/ui.context";
import config from "../../../data/SiteConfig";
import Layout from "../../components/layout/layout.component";
import Hero from "../../components/hero/hero.component";

const AboutPage = ({ location: { pathname }, data }) => {
  const {
    allMarkdownRemark: { edges }
  } = data;
  const {
    node: {
      frontmatter: { aboutHero }
    }
  } = edges[0];
  const uiContext = useContext(UiContext);
  const { isHome, isHomePage } = uiContext;

  const { t } = useTranslation("ABOUT");

  useEffect(() => {
    isHomePage(pathname);
  }, []);

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Hero isHome={isHome} fluid={aboutHero.childImageSharp.fluid}>
          <h1>{t("HERO_TITLE")}</h1>
        </Hero>
        <Article aboutStyle>
          {/* INTRODUCTION */}
          <h1>{t("INTRO_H1")}</h1>
          <p>{t("INTRO_P")}</p>
          {/* MY STORY */}
          <h1>{t("MY_STORY_H1")}</h1>
          <p>{t("MY_STORY_P")}</p>
          <p>{t("MY_STORY_P2")}</p>
          <p>{t("MY_STORY_P3")}</p>
          <p>{t("MY_STORY_P4")}</p>
          {/* WHAT I LIKE */}
          <h1>{t("WHAT_I_LIKE_H1")}</h1>
          <p>{t("WHAT_I_LIKE_P")}</p>
          {/* GAMES AND COMPUTERS */}
          <h2>{t("GAMES_AND_COMPUTERS_H2")}</h2>
          <p>{t("GAMES_AND_COMPUTERS_P")}</p>
          <p>{t("GAMES_AND_COMPUTERS_P2")}</p>
          <p>{t("GAMES_AND_COMPUTERS_P3")}</p>
          <p>{t("GAMES_AND_COMPUTERS_P4")}</p>
          <p>{t("GAMES_AND_COMPUTERS_P5")}</p>
          {/* PHOTOGRAPHY */}
          <h2>{t("PHOTOGRAPHY_H2")}</h2>
          <p>{t("PHOTOGRAPHY_P1")}</p>
          <p>{t("PHOTOGRAPHY_P2")}</p>
          <p>{t("PHOTOGRAPHY_P3")}</p>
          <p>{t("PHOTOGRAPHY_P4")}</p>
          <p>{t("PHOTOGRAPHY_P5")}</p>
          <p>{t("PHOTOGRAPHY_P6")}</p>
          {/* TRAVEL */}
          <h2>{t("TRAVEL_AND_CUISINE_H2")}</h2>
          <p>{t("TRAVEL_AND_CUISINE_P")}</p>
          <h2>{t("TRAVEL_AND_CUISINE_H3")}</h2>
          <ul>
            <li>
              <span role="img" aria-label="">
                🇺🇸
              </span>{" "}
              USA, Seattle
            </li>
            <li>
              <span role="img" aria-label="">
                🇨🇦
              </span>{" "}
              Canada, Vancouver
            </li>
            <li>
              <span role="img" aria-label="">
                🇷🇸
              </span>{" "}
              Serbia, Belgrade
            </li>
            <li>
              <span role="img" aria-label="">
                🇹🇭
              </span>{" "}
              Thailand, Bangkok
            </li>
            <li>
              <span role="img" aria-label="">
                🇩🇪
              </span>{" "}
              Germany, Berlin, Frankfurt
            </li>
            <li>
              <span role="img" aria-label="">
                🇦🇹
              </span>{" "}
              Austria, Vienna
            </li>
            <li>
              <span role="img" aria-label="">
                🇻🇳
              </span>{" "}
              Vietnam, a lot of cities
            </li>
            <li>
              <span role="img" aria-label="">
                🇰🇷
              </span>{" "}
              South Korea, Seoul
            </li>
            <li>
              <span role="img" aria-label="">
                🇨🇳
              </span>{" "}
              China, Shanghai
            </li>
            <li>
              <span role="img" aria-label="">
                🇸🇬
              </span>{" "}
              Singapore
            </li>
            <li>
              <span role="img" aria-label="">
                🇬🇧
              </span>{" "}
              UK, London
            </li>
            <li>
              <span role="img" aria-label="">
                🇭🇺
              </span>{" "}
              Hungary, Budapest
            </li>
          </ul>
          <p>{t("TRAVEL_AND_CUISINE_P2")}</p>
          {/* WEB DEVELOPMENT */}
          <h2>{t("WEB_DEVELOPMENT_H2")}</h2>
          <p>{t("WEB_DEVELOPMENT_P1")}</p>
          <p>{t("WEB_DEVELOPMENT_P2")}</p>
          <p>{t("WEB_DEVELOPMENT_P3")}</p>
          <p>{t("WEB_DEVELOPMENT_P4")}</p>
          <ul>
            <li>{t("WEB_DEVELOPMENT_LI1")}</li>
            <li>{t("WEB_DEVELOPMENT_LI2")}</li>
            <li>{t("WEB_DEVELOPMENT_LI3")}</li>
          </ul>
          <p>{t("WEB_DEVELOPMENT_P5")}</p>
          <p>{t("WEB_DEVELOPMENT_P6")}</p>
          <p>{t("WEB_DEVELOPMENT_P7")}</p>
          <ul>
            <li>{t("WEB_DEVELOPMENT_LI4")}</li>
            <li>{t("WEB_DEVELOPMENT_LI5")}</li>
            <li>{t("WEB_DEVELOPMENT_LI6")}</li>
            <li>{t("WEB_DEVELOPMENT_LI7")}</li>
            <li>{t("WEB_DEVELOPMENT_LI8")}</li>
            <li>{t("WEB_DEVELOPMENT_LI9")}</li>
          </ul>
          <p>{t("WEB_DEVELOPMENT_P8")}</p>
          <p>{t("WEB_DEVELOPMENT_P9")}</p>
          <ul>
            <li>{t("WEB_DEVELOPMENT_LI10")}</li>
          </ul>
          <p>{t("WEB_DEVELOPMENT_P10")}</p>
          {/* PURPOSE OF THIS BLOG */}
          <h1>{t("PURPOSE_OF_THIS_BLOG_H1")}</h1>
          <p>{t("PURPOSE_OF_THIS_BLOG_P1")}</p>
          <p>{t("PURPOSE_OF_THIS_BLOG_P2")}</p>
        </Article>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query About {
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
        }
      }
    }
  }
`;

export default AboutPage;
