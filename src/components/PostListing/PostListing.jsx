import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  && {
    background-color: ${props => props.theme.colors.cardItemBg};
    color: ${props => props.theme.colors.bodyTextColor};

    .styledLink {
      color: ${props => props.theme.colors.primaryThemeColor};
      text-decoration: none;
      border: none;
    }
  }

  .media {
    height: 140px;
  }
`;

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
          }
        }
      }
    }
  `);

  const getPostList = () => {
    const postEdges = data.allMarkdownRemark.edges;
    const postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  };

  const postList = getPostList();

  return (
    <Grid container spacing={3}>
      {postList.map((post, index) => (
        <Grid key={index} item xs={12} sm={6} lg={4}>
          <Link
            className='MuiLink-underlineNone'
            to={post.path}
            key={post.title}
          >
            <StyledCard>
              <CardActionArea>
                <CardMedia
                  className='media'
                  image={post.cover}
                  title='Contemplative Reptile'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {post.title}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions />
            </StyledCard>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default PostListing;
