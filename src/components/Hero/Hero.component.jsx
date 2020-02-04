import React from 'react';
import styled from 'styled-components';
import bgSrc from '../../images/heroBg.jpg';

const StyledBgWrap = styled.section`
  background-image: url(${bgSrc});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-end;

  .hero-content {
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 100%;
  }
`;

const Hero = () => {
  return (
    <StyledBgWrap>
      <div className='hero-content'>
        <h1>Heading</h1>
        <p>
          Lorem ipsum dolor sit amet, an his etiam torquatos. Tollit soleat
          phaedrum te duo, eum cu recteque expetendis neglegentur.
        </p>
      </div>
    </StyledBgWrap>
  );
};

export default Hero;
