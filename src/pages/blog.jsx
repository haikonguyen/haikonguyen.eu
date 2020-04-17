import React from 'react';
import Helmet from 'react-helmet';
import { Link, useStaticQuery, graphql } from 'gatsby';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Img from 'gatsby-image';
import Layout from '../components/layout/layout.component';
import placeHolder from '../img/placeholder.png';
import Hero from '../components/hero/hero.component';
import config from '../../data/SiteConfig';

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
      <div className='blog-container'>
        <Helmet title={`Blog | ${config.siteTitle}`} />
        <Hero />
      </div>
    </Layout>
  );
};

export default BlogPage;
