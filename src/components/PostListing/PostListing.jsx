import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';
import { rem } from 'polished';

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1140px;
  margin: 0 auto;
  grid-gap: 20px;

  @media ${props => props.theme.screen.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${props => props.theme.screen.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledCard = styled(Card)`
  && {
    background-color: ${props => props.theme.colors.cardItemBg};
    color: ${props => props.theme.colors.bodyTextColor};
    box-shadow: ${props => props.theme.colors.cardItemShadow};
  }

  .media {
    height: ${rem('140px')};
  }

  .cardContent {
    min-height: ${rem('172px')};

    h2 {
      font-size: ${rem('24px')};
    }

    p {
      font-size: ${rem('16px')};
      line-height: ${rem('22px')};
      text-align: justify;
    }
  }
  .styledLink {
    color: ${props => props.theme.colors.primaryThemeColor};
    text-decoration: none !important;
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
            id
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
        timeToRead: postEdge.node.timeToRead,
        id: postEdge.node.id
      });
    });
    return postList;
  };

  const postList = getPostList();

  return (
    <StyledContainer>
      {postList.map(post => (
        <Link className='styledLink' to={post.path}>
          <StyledCard>
            <CardActionArea>
              <CardMedia
                className='media'
                image={post.cover}
                title='Contemplative Reptile'
              />
              <CardContent className='cardContent'>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </CardContent>
            </CardActionArea>
          </StyledCard>
        </Link>
      ))}
    </StyledContainer>
  );
};

export default PostListing;
