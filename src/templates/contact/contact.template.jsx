import React from "react";
import Helmet from "react-helmet";
import Soon from "../../components/comingsoon/soon.component";
import config from "../../../data/SiteConfig";
import Layout from "../../components/layout/layout.component";

const ContactPage = () => {
  return (
    <Layout>
      <div className="contact-container">
        <Helmet title={`Contact | ${config.siteTitle}`} />
        <Soon />
      </div>
    </Layout>
  );
};

export default ContactPage;
