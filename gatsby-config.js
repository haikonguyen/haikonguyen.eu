// const urljoin = require('url-join');
const config = require('./data/SiteConfig');

module.exports = {
  pathPrefix: config.pathPrefix === '' ? '/' : config.pathPrefix,
  siteMetadata: {
    title: 'Haiko Nguyen',
    author: {
      name: 'Haiko Nguyen',
    },
    pathPrefix: '/',
    siteUrl: 'https://www.haikonguyen.eu/',
    description:
        'FRONT-END DEVELOPER, PHOTOGRAPHER, VLOGGER',
    feedUrl: 'https://www.haikonguyen.eu//rss.xml',
    logo: 'https://www.haikonguyen.eu/logo.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    `gatsby-plugin-styled-components`,
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/posts`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            option: {
              name: `uploads`
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe'
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-autolink-headers'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor
      }
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: `src/img/mainLogoOptimized.png`
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ]
};
