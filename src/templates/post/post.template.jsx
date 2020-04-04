import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../../components/layout/index';
import PostTags from '../../components/PostTags/PostTags';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import SEO from '../../components/SEO/SEO';
import Footer from '../../components/Footer/Footer';
import config from '../../../data/SiteConfig';
import StyledContainer, { PostHeader } from './post.style';

const PostTemplate = (props) => {
  const { data, pageContext } = props;
  const { slug } = pageContext;
  const postNode = data.markdownRemark;
  const post = postNode.frontmatter;
  if (!post.id) {
    post.id = slug;
  }
  if (!post.category_id) {
    post.category_id = config.postDefaultCategoryID;
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      <PostHeader style={{ backgroundImage: `url(${post.cover})` }}>
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
};

export default PostTemplate;

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
