import styled from 'styled-components';
import { rem } from 'polished';

const StyledMain = styled.main`
  .sections {
    padding: ${rem('70px')} ${rem('15px')};

    .heading {
      padding-bottom: ${rem('70px')};

      h1 {
        color: ${props => props.theme.colors.white};
        text-align: center;
        margin: 0;
        text-transform: uppercase;
      }

      hr {
        border: ${rem('1px')} solid
          ${props => props.theme.colors.primaryThemeColor};
        width: ${rem('100px')};
        margin: 0 auto;
        margin-top: ${rem('10px')};
      }
    }
  }

  .about {
    display: grid;
    grid-gap: ${rem('50px')};
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    max-width: ${rem('1140px')};
    margin: 0 auto;
    align-items: flex-start;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: ${rem('10px')};
    }

    @media ${props => props.theme.screen.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default StyledMain;
