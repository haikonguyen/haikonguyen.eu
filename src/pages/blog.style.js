import styled from 'styled-components';

export const StyledSearch = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  @media ${(props) => props.theme.screen.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.screen.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default StyledMain;
