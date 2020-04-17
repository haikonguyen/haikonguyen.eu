import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StyledContainer } from './post-listing.style';
import PostItem from '../post-item/post-item.component';

const PostListing = () => {
  const data = useStaticQuery(graphql`
    query ListingQuery {
      allMarkdownRemark(
        sort: { fields: [fields___date], order: DESC }
        limit: 3
      ) {
        edges {
          node {
            fields {
              slug
              date
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
    }
  `);

  const getPostList = () => {
    const postEdges = data.allMarkdownRemark.edges;
    const postList = [];
    postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        id: postEdge.node.id,
      });
    });
    return postList;
  };

  const postList = getPostList();

  return (
    <StyledContainer className='container--fixed'>
      {postList.map((post) => {
        let cover;
        if (post.cover) {
          cover = post.cover.childImageSharp.fluid;
        }

        return (
          <Link key={post.id} className='styledLink' to={post.path}>
            <PostItem cover={cover} title={post.title} excerpt={post.excerpt} />
          </Link>
        );
      })}
    </StyledContainer>
  );
};

export default PostListing;
