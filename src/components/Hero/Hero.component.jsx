import React from 'react';
import styled from 'styled-components';
import bgSrc from '../../img/PragueCastle01_opti.jpg';

const StyledHero = styled.section`
  background-image: url(${bgSrc});
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
`;

const Hero = ({ children, className }) => {
  return <StyledHero className={className}>{children}</StyledHero>;
};

export default Hero;
