import React from 'react';
import styled from 'styled-components';
import soonBg from '../../img/underConstruction.jpg';

const StyledDiv = styled.div`
  background-image: url(${soonBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 50vh;

  @media ${props => props.theme.screen.tablet} {
    height: 80vh;
  }

  .soonDarkBg {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background: ${props => props.theme.colors.heroContentBg};

    &__textWrap {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    h1 {
      text-transform: uppercase;
      font-size: 50px;
    }
  }
`;

const Soon = () => {
  return (
    <StyledDiv>
      <div className='soonDarkBg'>
        <div className='soonDarkBg__textWrap'>
          <h1>Coming Soon</h1>
          <p>Page is still under construction</p>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Soon;
