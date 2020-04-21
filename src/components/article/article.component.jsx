import React from 'react';
import StyledArticle from './article.style';

const Article = (props) => {
  const { title, postHtml, children, aboutStyle } = props;
  return (
    <StyledArticle className='container--fixed'>
      <div
        className={
          aboutStyle ? 'contentWrapper contentWrapper--about' : 'contentWrapper'
        }
      >
        {title && <h1>{title}</h1>}
        {postHtml && <div dangerouslySetInnerHTML={{ __html: postHtml }} />}
        {children}
      </div>
    </StyledArticle>
  );
};

export default Article;
