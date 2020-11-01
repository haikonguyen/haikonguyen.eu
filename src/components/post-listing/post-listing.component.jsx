import React from "react";
import { StyledContainer } from "./post-listing.style";
import PostItem from "../post-item/post-item.component";
import { formatDate } from "../../utils/global";

const PostListing = ({ postEdges }) => {
  const getPostList = () => {
    const postList = [];
    postEdges.forEach(postEdge => {
      postList.push({
        path: `/blog${postEdge.node.fields.slug}`,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        id: postEdge.node.id
      });
    });
    return postList;
  };

  const postList = getPostList();

  return (
    <StyledContainer className="container--fixed">
      {postList.map(post => {
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
            tags={post.tags}
          />
        );
      })}
    </StyledContainer>
  );
};

export default PostListing;
