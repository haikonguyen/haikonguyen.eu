import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import TextField from '@material-ui/core/TextField';
import Layout from '../components/layout/layout.component';
import Hero from '../components/hero/hero.component';
import config from '../../data/SiteConfig';
import PostItem from '../components/post-item/post-item.component';
import StyledMain, { StyledSearch } from './blog.style';
import blogHero from '../img/blogPage.jpg';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
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
              cover {
                childImageSharp {
                  fluid(maxWidth: 345, maxHeight: 140) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
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
      });
    });
    return postList;
  };

  const postList = getPostList();

  return (
    <Layout>
      <Helmet title={`Blog | ${config.siteTitle}`} />
      <Hero bgImage={blogHero}>
        <h1>Blog</h1>
      </Hero>
      <StyledSearch className='container container--fixed'>
        <TextField
          id='outlined-search'
          label='Search'
          type='search'
          variant='outlined'
        />
      </StyledSearch>
      <StyledMain className='container container--fixed'>
        {postList.map((post) => {
          let cover;
          if (post.cover) {
            cover = post.cover.childImageSharp.fluid;
          }

          return (
            <PostItem
              key={post.id}
              path={post.path}
              cover={cover}
              title={post.title}
              excerpt={post.excerpt}
            />
          );
        })}
      </StyledMain>
    </Layout>
  );
};

export default BlogPage;
