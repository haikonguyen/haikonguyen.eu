/* eslint "no-console": "off" */

const path = require("path");
const _ = require("lodash");
const moment = require("moment");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const { createFilePath } = require("gatsby-source-filesystem");
const siteConfig = require("./data/SiteConfig");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              tags
              date
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges;

    // Sort posts
    posts.sort((postA, postB) => {
      const dateA = moment(
        postA.node.frontmatter.date,
        siteConfig.dateFromFormat
      );

      const dateB = moment(
        postB.node.frontmatter.date,
        siteConfig.dateFromFormat
      );

      if (dateA.isBefore(dateB)) return 1;
      if (dateB.isBefore(dateA)) return -1;

      return 0;
    });

    // Paging
    posts.forEach(edge => {
      const { id } = edge.node;
      createPage({
        path:
          edge.node.frontmatter.templateKey === "post"
            ? `/blog${String(edge.node.fields.slug)}`
            : edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}/${String(
            edge.node.frontmatter.templateKey
          )}.template.jsx`
        ),
        // additional data can be passed via context
        context: {
          id
        }
      });
    });

    // Tag pages:
    let tags = [];
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });
    // Eliminate duplicate tags
    tags = _.uniq(tags);

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`;

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags/tags.template.jsx`),
        context: {
          tag
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
