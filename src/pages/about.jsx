import React, { useContext, useEffect } from 'react';
import Helmet from 'react-helmet';
import Article from '../components/article/article.component';
import { UiContext } from '../context/ui.context';
import config from '../../data/SiteConfig';
import Layout from '../components/layout/layout.component';
import aboutBg from '../img/aboutPageOptimal.jpg';
import Hero from '../components/hero/hero.component';

const AboutPage = ({ location: { pathname }, data }) => {
  const uiContext = useContext(UiContext);
  const { isHome, isHomePage } = uiContext;

  useEffect(() => {
    isHomePage(pathname);
  }, []);

  return (
    <Layout>
      <div className='about-container'>
        <Helmet title={`About | ${config.siteTitle}`} />
        <Hero isHome={isHome} bgImage={aboutBg}>
          <h1>ABOUT</h1>
        </Hero>
        <Article aboutStyle>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            expedita facere laboriosam praesentium minus quam ut error.
            Deserunt, quidem natus dicta tempore aspernatur, quaerat quis
            temporibus eius necessitatibus tenetur minus. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nesciunt incidunt doloribus
            consequatur laboriosam? Voluptate magnam fugiat quas optio autem
            similique. Similique, obcaecati recusandae. A amet libero ullam
            dolorum neque! Sapiente! Suscipit molestias temporibus vitae
            similique alias architecto consequatur perferendis nisi officia non
            eaque quisquam in, magnam accusantium ipsa nostrum! Voluptatum quasi
            odit, nisi itaque quaerat ad? Non sit officiis explicabo! Saepe, qui
            repellat. Nisi, ipsam dolor hic nam quia dolorem minus et. Ab saepe
            eligendi ullam fugiat quidem. Animi, quas commodi. Dolore quod in
            aliquam culpa omnis corporis tempora corrupti. Earum distinctio
            totam veritatis quaerat exercitationem ducimus explicabo architecto
            iste dolor assumenda tenetur nulla eveniet illum, rerum non
            voluptate dicta excepturi dolorum aliquid minima sit modi
            consequatur qui voluptates! Amet! Unde similique, sed distinctio
            molestiae quaerat eveniet earum assumenda omnis illo vero laborum.
            Modi dignissimos corporis enim eligendi minima, officia alias.
            Tempora aut officiis officia placeat, laborum pariatur omnis ex!
          </p>
        </Article>
      </div>
    </Layout>
  );
};

export default AboutPage;
