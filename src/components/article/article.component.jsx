import React from 'react';
import { navigate } from '@reach/router';
import Avatar from '@material-ui/core/Avatar';
import TodayIcon from '@material-ui/icons/Today';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import StyledArticle from './article.style';
import avatar from '../../img/HaikoAvatarMini.jpg';
import config from '../../../data/SiteConfig';

const Article = (props) => {
  const {
    title,
    postHtml,
    children,
    aboutStyle,
    date,
    timeToRead,
    meta,
  } = props;

  const getReadMinutes = () => {
    if (timeToRead === 1) {
      return 'MIN';
    }
    return 'MINS';
  };
  return (
    <StyledArticle className='container--fixed'>
      <div
        className={
          aboutStyle ? 'contentWrapper contentWrapper--about' : 'contentWrapper'
        }
      >
        {title && <h1>{title}</h1>}
        {meta && (
          <section className='contentWrapper__meta flex items-center'>
            <div className='contentWrapper__meta__avatar'>
              <Avatar
                onClick={() => navigate('/about')}
                alt={config.siteTitleAlt}
                src={avatar}
              />
            </div>
            <div className='contentWrapper__meta__text flex flex-wrap items-center'>
              <div>Haiko Nguyen</div>
              <div className='flex items-center'>
                <TodayIcon />
                {date}
              </div>
              <div className='contentWrapper__meta__text__readingTime flex items-center'>
                <MenuBookIcon />
                READING TIME: {timeToRead} {getReadMinutes(timeToRead)}
              </div>
            </div>
          </section>
        )}
        {postHtml && (
          <main
            className='contentWrapper__content'
            dangerouslySetInnerHTML={{ __html: postHtml }}
          />
        )}
        {children}
      </div>
    </StyledArticle>
  );
};

export default Article;
