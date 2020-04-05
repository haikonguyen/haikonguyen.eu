import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { StyledContainer, StyledCard } from './PostListing.style';

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
              cover
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
    <StyledContainer>
      {postList.map((post) => {
        return (
          <Link key={post.id} className='styledLink' to={post.path}>
            <StyledCard>
              <CardActionArea>
                <CardMedia
                  className='media'
                  image={post.cover}
                  title={post.title}
                >
                  <img src='' alt='' />
                </CardMedia>
                <CardContent className='cardContent'>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          </Link>
        );
      })}
    </StyledContainer>
  );
};

export default PostListing;
