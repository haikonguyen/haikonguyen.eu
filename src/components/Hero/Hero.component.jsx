import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const StyledHero = styled.section`
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media ${props => props.theme.screen.tablet} {
    height: 50vh;
  }

  .contentWrap {
    background-color: ${props => props.theme.colors.heroContentBg};
    color: ${props => props.theme.colors.white};
    padding: ${rem('20px')};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0;
  }
`;

const Hero = ({ children, className, bgImage }) => {
  return (
    <StyledHero
      style={{ backgroundImage: `url(${bgImage})` }}
      className={className}
    >
      <div className='contentWrap'>{children}</div>
    </StyledHero>
  );
};

export default Hero;
