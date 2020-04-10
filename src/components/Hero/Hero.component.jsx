import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import { rem } from 'polished';
import CustomBtn from '../MaterialUi/Button.component';
import bgSrc from '../../img/PragueCastle01_opti.jpg';
import profileImg from '../../img/HaikoProfile.jpg';
import config from '../../../data/SiteConfig';

const textLines = [`Web Developer`, `Fotographer`, `VLOGGER`];

const StyledBgWrap = styled.section`
  background-image: url(${bgSrc});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media ${props => props.theme.screen.tablet} {
    height: 50vh;
  }

  .hero {
    background: ${props => props.theme.colors.heroContentBg};
    color: ${props => props.theme.colors.white};
    padding: ${rem('20px')};
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;

    &__profileWrap {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &__header {
        img {
          border-radius: 50%;
          height: 180px;
          width: 180px;
          border: 3px solid ${props => props.theme.colors.backgroundColor};
        }
      }

      &__description {
        color: white;
        text-align: center;
        h1 {
          margin: 10px 0;
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <StyledBgWrap>
      <div className='hero'>
        <div className='hero__profileWrap'>
          <section className='hero__profileWrap__header'>
            <img src={profileImg} alt='The Avatar' />
          </section>
          <section className='hero__profileWrap__description'>
            <h1>{config.siteTitle}</h1>
            <p>WEB DEVELOPER, PHOTOGRAPHER,&nbsp;VLOGGER</p>
            {/* <Typed
              className='hero-content__highlight'
              strings={textLines}
              typeSpeed={100}
            /> */}
          </section>
          <section className='hero__profileWrap__buttons'>
            <CustomBtn
              onClick={() => console.log('Do something later')}
              text='Contact Me'
              variant='contained'
              size='large'
              color='primary'
            />
          </section>
        </div>
      </div>
    </StyledBgWrap>
  );
};

export default Hero;
