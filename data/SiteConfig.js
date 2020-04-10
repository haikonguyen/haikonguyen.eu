const config = {
  siteTitle: 'Haiko Nguyen', // Site title.
  siteTitleShort: 'HN Blog', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Hai Ha Nguyen', // Alternative site title for SEO.
  siteLogo: '/static/img/mainLogoOptimized.png', // Logo used for SEO and manifest.
  siteUrl: 'https://www.haikonguyen.eu/', // Domain of your website without pathPrefix.
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'A GatsbyJS stater with Advanced design in mind.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-47311644-5', // GA tracking ID.
  disqusShortname: 'haiko-nguyen', // Disqus shortname.
  postDefaultCategoryID: 'Tech', // Default category for posts.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: 'Haiko Nguyen', // Username to display in the author segment.
  userEmail: 'haicorp87@gmail.com', // Email used for RSS feed's author segment
  userTwitter: '', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'North Pole, Earth', // User location to display in the author segment.
  userAvatar: '/static/img/HaikoProfile.jpg', // User avatar to display in the author segment.
  userDescription:
    'I am a Vietnamese foodie, vlogger and travel photographer based in Prague. I am passionate about photography, web development and movie creation.', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/haikonguyen.eu/',
      icon: 'FaFacebookF'
    },
    {
      label: 'Instagram',
      url: 'https://github.com/2c0',
      icon: 'FaInstagram'
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/haicorp87',
      icon: 'FaTwitter'
    },
    {
      label: 'GitHub',
      url: 'https://github.com/2c0',
      icon: 'FaGithub'
    }
  ],
  navLinks: [
    {
      id: 1,
      href: '/',
      name: 'Home'
    },
    {
      id: 2,
      href: '/about',
      name: 'About'
    },
    {
      id: 3,
      href: '/blog',
      name: 'Blog'
    },
    {
      id: 4,
      href: '/portfolio',
      name: 'Portfolio'
    },
    {
      id: 5,
      href: '/contact',
      name: 'Contact'
    }
  ],
  copyright: 'Copyright © 2020. Haiko Nguyen', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#2e89ff', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0' // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
