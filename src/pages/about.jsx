import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import config from '../../data/SiteConfig';

class AboutPage extends Component {
  constructor(props) {
    super(props);

    const { lightTheme } = props;
    console.log('about', lightTheme);
  }

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
