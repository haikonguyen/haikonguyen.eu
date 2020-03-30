import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { rem } from 'polished';
import Layout from '../layout/index';
import PostTags from '../components/PostTags/PostTags';
import SocialLinks from '../components/SocialLinks/SocialLinks';
import SEO from '../components/SEO/SEO';
import Footer from '../components/Footer/Footer';
import config from '../../data/SiteConfig';

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    const PostHeader = styled.div`
      width: 100%;
      height: 25vh;
      background-color: #3f51b5;
      -webkit-flex-shrink: 0;
      -ms-flex-negative: 0;
      flex-shrink: 0;

      .postHeaderWrap {
        max-width: ${rem('1140px')};
        margin: 0 auto;
        height: 25vh;
        position: relative;

        &__tags {
          position: absolute;
          bottom: 60px;
          left: 0;

          @media ${props => props.theme.screen.tablet} {
            bottom: 40px;
          }

          @media ${props => props.theme.screen.laptopL} {
            bottom: 100px;
          }
        }

        @media ${props => props.theme.screen.tablet} {
          height: 30vh;
        }

        @media ${props => props.theme.screen.laptopL} {
          height: 40vh;
        }
      }

      @media ${props => props.theme.screen.tablet} {
        height: 30vh;
      }

      @media ${props => props.theme.screen.laptopL} {
        height: 40vh;
      }
    `;

    const StyledContainer = styled.main`
      max-width: 1140px;
      margin: 0 auto;
      box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
        0 3px 3px -2px rgba(0, 0, 0, 0.2), 0 1px 8px 0 rgba(0, 0, 0, 0.12);

      .contentWrapper {
        background-color: ${props => props.theme.colors.cardItemBg};
        padding: ${rem('20px')} ${rem('10px')};
        margin-top: ${rem('-40px')};
        border-radius: ${rem('5px')};
        margin-left: ${rem('10px')};
        margin-right: ${rem('10px')};

        @media ${props => props.theme.screen.tablet} {
          padding: ${rem('30px')} ${rem('40px')};
          margin-top: ${rem('-20px')};
          margin-left: ${rem('30px')};
          margin-right: ${rem('30px')};
        }

        @media ${props => props.theme.screen.laptop} {
          padding: ${rem('50px')} ${rem('70px')};
          margin-top: ${rem('-80px')};
          border-radius: ${rem('10px')};
          margin-left: 0;
          margin-right: 0;
        }

        &__social {
          display: flex;
          justify-content: center;

          h4 {
            text-align: center;
          }
        }
      }
    `;
    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <PostHeader>
          <div className='postHeaderWrap'>
            <PostTags className='postHeaderWrap__tags' tags={post.tags} />
          </div>
        </PostHeader>
        <StyledContainer>
          <div className='contentWrapper'>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            <div className='contentWrapper__social'>
              <div>
                <h4>Share this post:</h4>
                <SocialLinks postPath={slug} postNode={postNode} />
              </div>
            </div>
          </div>
        </StyledContainer>
        <Footer config={config} />
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
