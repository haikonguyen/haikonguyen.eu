import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Img from 'gatsby-image';
import { StyledCard } from './post-item.style';
import placeHolder from '../../img/placeholder.png';

const PostItem = ({ cover, title, excerpt }) => {
  return (
    <StyledCard>
      <CardActionArea className='cardActionArea'>
        {cover ? (
          <Img fluid={cover} />
        ) : (
          <div
            className='cardActionArea__placeholder'
            style={{ backgroundImage: `url(${placeHolder})` }}
          />
        )}
        <CardContent className='cardContent'>
          <h2>{title}</h2>
          <p>{excerpt}</p>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default PostItem;
