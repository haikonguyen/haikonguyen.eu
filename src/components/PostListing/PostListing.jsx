import React from 'react';
import { Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  max-width: 345px;

  .media {
    height: 140px;
  }
`;

class PostListing extends React.Component {
  getPostList() {
    const { data } = this.props;
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
  }

  render() {
    const postList = this.getPostList();
    return (
      <>
        <Grid container spacing={3}>
          {postList.map((post, index) => (
            <Grid key={index} item xs={12} sm={6} lg={4}>
              <StyledCard>
                <CardActionArea>
                  <CardMedia
                    className='media'
                    image='/static/images/cards/contemplative-reptile.jpg'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {post.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {post.excerpt}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size='small' color='primary'>
                    Share
                  </Button>
                  <Button size='small' color='primary'>
                    <Link to={post.path} key={post.title}>
                      <h1>See more</h1>
                    </Link>
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default PostListing;
