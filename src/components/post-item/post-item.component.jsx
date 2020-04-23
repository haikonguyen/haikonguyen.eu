import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { navigate } from '@reach/router';
import { StyledCard } from './post-item.style';
import placeHolder from '../../img/placeholder.png';
import avatar from '../../img/HaikoAvatarMini.jpg';
import config from '../../../data/SiteConfig';

const PostItem = ({ path, cover, title, excerpt, date, category }) => {
  return (
    <Link className='styledLink' to={path}>
      <StyledCard>
        <CardHeader
          avatar={<Avatar alt={config.siteTitleAlt} src={avatar} />}
          title={title}
          subheader={date}
        />
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
            <p>{excerpt}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Chip label={category} color='primary' />
        </CardActions>
      </StyledCard>
    </Link>
  );
};

export default PostItem;
