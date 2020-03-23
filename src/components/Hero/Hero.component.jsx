import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import Typography from '@material-ui/core/Typography';
import { rem } from 'polished';
import CustomBtn from '../MaterialUi/Button.component';
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
    background: ${props =>
      props.lightTheme ? `rgba(0, 0, 0, 0.65)` : `white`};
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
`;

const Hero = props => {
  const { theme } = props;

  console.log('theme', theme);

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
          <CustomBtn
            onClick={() => console.log('Do something later')}
            text='Contact Me'
          />
        </Typography>
      </div>
    </StyledBgWrap>
  );
};

export default Hero;
