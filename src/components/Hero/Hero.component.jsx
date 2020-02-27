import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import Typography from '@material-ui/core/Typography';
import bgSrc from '../../images/heroBg.jpg';

const textLines = [`Web Developer`, `Fotographer`, `VLOGGER`];

const StyledBgWrap = styled.section`
  background-image: url(${bgSrc});
  background-size: cover;
  background-position: center center;
  /* background-attachment: fixed; */
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;

  .hero-content {
    background: rgba(0, 0, 0, 0.5);
    color: ${props => props.theme.colors.white};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;

    @media ${props => props.theme.screen.tablet} {
      display: block;
      width: 350px;
      position: absolute;
      top: 50%;
      left: 10%;
      text-align: center;
    }
  }
`;

const Hero = () => {
  return (
    <StyledBgWrap>
      <div className='hero-content'>
        <Typography component='div' align='center'>
          <div>Hi I am</div>
          <div>Haiko Nguyen</div>
          <div>
            I am a <Typed strings={textLines} typeSpeed={100} />
          </div>
          <div>Contact Me</div>
        </Typography>
      </div>
    </StyledBgWrap>
  );
};

export default Hero;
