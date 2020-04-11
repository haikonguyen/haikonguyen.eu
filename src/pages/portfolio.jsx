import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Soon from '../components/comingsoon/soon.component';
import config from '../../data/SiteConfig';
import Layout from '../components/layout/layout.component';

class PortfolioPage extends Component {
  render() {
    return (
      <Layout>
        <div className='portfolio-container'>
          <Helmet title={`Portfolio | ${config.siteTitle}`} />
          <Soon />
        </div>
      </Layout>
    );
  }
}

export default PortfolioPage;
