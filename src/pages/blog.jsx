import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Soon from '../components/comingsoon/soon.component';
import config from '../../data/SiteConfig';
import Layout from '../components/layout/layout.component';

class BlogPage extends Component {
  render() {
    return (
      <Layout>
        <div className='blog-container'>
          <Helmet title={`Blog | ${config.siteTitle}`} />
          <Soon />
        </div>
      </Layout>
    );
  }
}

export default BlogPage;
