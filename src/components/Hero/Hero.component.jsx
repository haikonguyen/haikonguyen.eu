import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import Typography from '@material-ui/core/Typography';
import { rem } from 'polished';
import bgSrc from '../../images/heroBg.jpg';

const textLines = [`Web Developer`, `Fotographer`, `VLOGGER`];

const StyledBgWrap = styled.section`
  background-image: url(${bgSrc});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  .hero-content {
    background: rgba(0, 0, 0, 0.5);
    color: ${props => props.theme.colors.white};
    padding: ${rem('20px')};
    width: 100%;
    border-left: ${rem('3px')} solid
      ${props => props.theme.colors.primaryThemeColor};

    &__text {
      font-size: ${rem('18px')};
    }

    &__highlight {
      font-size: 38px;
      color: ${props => props.theme.colors.primaryThemeColor};
      text-transform: uppercase;
    }

    @media ${props => props.theme.screen.tablet} {
      display: block;
      width: ${rem('275px')};
      position: absolute;
      top: 50%;
      left: 10%;
      border-radius: ${rem('15px')};
    }
  }

  .iconScroll {
    width: ${rem('30px')};
    height: ${rem('50px')};
    box-shadow: inset 0 0 0 ${rem('1px')} #fff;
    border-radius: ${rem('25px')};
    position: relative;
    margin-bottom: ${rem('20px')};
    display: none;

    &::before {
      position: absolute;
      left: 50%;
      content: '';
      width: ${rem('8px')};
      height: ${rem('8px')};
      background: #fff;
      margin-left: ${rem('-4px')};
      top: ${rem('8px')};
      border-radius: ${rem('4px')};
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-name: scroll;
    }

    @media (min-width: 1200px) {
      display: inline-block;
    }

    @keyframes scroll {
      0% {
        opacity: 1;
      }
      100% {
        transform: translateY(${rem('25px')});
        opacity: 0;
      }
    }
  }
`;

const Hero = props => {
  const { showonscroll } = props;
  return (
    <StyledBgWrap>
      <div className='hero-content'>
        <Typography component='div'>
          <div className='hero-content__text'>Welcome, my name is</div>
          <div className='hero-content__highlight'>Haiko Nguyen</div>
          <div className='hero-content__text'>
            I am a <br />
            <Typed
              className='hero-content__highlight'
              strings={textLines}
              typeSpeed={100}
            />
          </div>
          <div className='hero-content__text'>Contact Me</div>
        </Typography>
      </div>
      <div className={showonscroll ? 'iconScroll--hide' : 'iconScroll'} />
    </StyledBgWrap>
  );
};

export default Hero;
