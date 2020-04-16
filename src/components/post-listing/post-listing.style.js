import styled from 'styled-components';
import { rem } from 'polished';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${rem('1140px')};
  margin: 0 auto;
  grid-gap: 20px;

  @media ${(props) => props.theme.screen.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.screen.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
