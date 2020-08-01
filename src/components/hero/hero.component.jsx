import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { rem } from 'polished';

const StyledHero = styled(BackgroundImage)`
  background-size: cover;
  background-position: center top;
  width: 100%;
  height: ${(props) => (props.isHome ? '70vh' : '40vh')};

  @media ${(props) => props.theme.screen.tablet} {
    height: 50vh;
  }

  .contentWrap {
    background-color: ${(props) => props.theme.colors.heroContentBg};
    padding: ${rem('20px')};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    h1 {
      color: white;
    }
  }
`;

const Hero = (props) => {
  const { children, className, fluid, isHome } = props;

  return (
    <StyledHero
      className={className}
      isHome={isHome}
      fluid={fluid}
    >
      <div className='contentWrap'>{children}</div>
    </StyledHero>
  );
};

export default Hero;
