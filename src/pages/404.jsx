import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout.component';
import FourOFourWrap from './404.style';
import astronaut from '../img/astronaut.svg';
import earth from '../img/earth.svg';
import moon from '../img/moon.svg';
import rocket from '../img/rocket.svg';

const FourOFourPage = () => {
  return (
    <Layout>
      <FourOFourWrap>
        <div className='starsWrap'>
          <main className='content'>
            <h1>404</h1>
            <h2>LOOKS LIKE YOU ARE LOST IN SPACE</h2>
            <Link className='btn-go-home' to='/'>
              GO BACK HOME
            </Link>
          </main>
          <section className='objects'>
            <img
              className='object_rocket'
              src={rocket}
              width='40px'
              alt='Rocket'
            />
            <div className='earth-moon'>
              <img
                className='object_earth'
                src={earth}
                width='100px'
                alt='earth img'
              />
              <img
                className='object_moon'
                src={moon}
                width='80px'
                alt='moon img'
              />
            </div>
            <div className='box_astronaut'>
              <img
                className='object_astronaut'
                src={astronaut}
                width='140px'
                alt='astronaut'
              />
            </div>
            <div className='glowing_stars'>
              <div className='star' />
              <div className='star' />
              <div className='star' />
              <div className='star' />
              <div className='star' />
            </div>
          </section>
        </div>
      </FourOFourWrap>
    </Layout>
  );
};

export default FourOFourPage;
