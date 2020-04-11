import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Soon from '../components/comingsoon/soon.component';
import config from '../../data/SiteConfig';
import Layout from '../components/layout/layout.component';

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className='contact-container'>
          <Helmet title={`Contatct | ${config.siteTitle}`} />
          <Soon />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
