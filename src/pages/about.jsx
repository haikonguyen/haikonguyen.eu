import React, { Component } from 'react';
import Helmet from 'react-helmet';
import config from '../../data/SiteConfig';
import Layout from '../components/layout/layout.component';

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className='about-container'>
          <Helmet title={`About | ${config.siteTitle}`} />
          test
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
