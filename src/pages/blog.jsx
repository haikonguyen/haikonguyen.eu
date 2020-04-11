import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout/layout.component';
import config from '../../data/SiteConfig';

const Blog = () => (
  <Layout>
    <div className='about-container'>
      <Helmet title={`About | ${config.siteTitle}`} />
      test
    </div>
  </Layout>
);

export default Blog;
