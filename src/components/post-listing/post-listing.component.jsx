import React from 'react';
import { StyledContainer } from './post-listing.style';
import PostItem from '../post-item/post-item.component';
import { formatDate } from '../../utils/global';

const PostListing = ({ postEdges }) => {
  const getPostList = () => {
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
        category: postEdge.node.frontmatter.category,
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

        const date = formatDate(post.date);

        return (
          <PostItem
            key={post.id}
            path={post.path}
            cover={cover}
            title={post.title}
            excerpt={post.excerpt}
            date={date}
            timeToRead={post.timeToRead}
            category={post.category}
          />
        );
      })}

      {/* {postList.map((post) => {
        console.log(post.category);
      })} */}
    </StyledContainer>
  );
};

export default PostListing;
