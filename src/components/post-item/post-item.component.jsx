import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import {v1 as uuidv1} from "uuid";
import { StyledCard } from './post-item.style';
import placeHolder from '../../img/placeholder.png';
import avatar from '../../img/HaikoAvatarMini.jpg';
import config from '../../../data/SiteConfig';

const PostItem = ({ path, cover, title, excerpt, date, tags }) => {

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
          {tags.map((tag) => {
            return(
              <Chip key={uuidv1()} label={tag} color='primary' />
            )
          }
          )}
        </CardActions>
      </StyledCard>
    </Link>
  );
};

export default PostItem;
