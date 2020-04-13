import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../../components/layout/layout.component';
import PostTags from '../../components/post-tags/post-tags';
import SEO from '../../components/seo/seo';
import config from '../../../data/SiteConfig';
import StyledContainer, { PostHeader, StyledPlaceholder } from './post.style';
import bgPlaceHolder from '../../img/bgMacPlaceholder.jpg';

const PostTemplate = props => {
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

  let cover;
  if (post.cover) {
    cover = post.cover.childImageSharp.fluid;
  }

  return (
    <Layout>
      <Helmet>
        <title>{`${post.title} | ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postPath={slug} postNode={postNode} postSEO />
      {cover ? (
        <PostHeader Tag='section' fluid={cover}>
          <div className='postHeaderWrap'>
            <PostTags className='postHeaderWrap__tags' tags={post.tags} />
          </div>
        </PostHeader>
      ) : (
        <StyledPlaceholder
          style={{ backgroundImage: `url(${bgPlaceHolder})` }}
        />
      )}
      <StyledContainer>
        <div className='contentWrapper'>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <div className='contentWrapper__social'>
            {/* FIXME: Move to Post Header 
                <SocialLinks postPath={slug} postNode={postNode} /> 
              */}
          </div>
        </div>
      </StyledContainer>
    </Layout>
  );
};

export default PostTemplate;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(quality: 80, maxWidth: 2400) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
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
