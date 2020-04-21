import styled from 'styled-components';
import { rem } from 'polished';

const StyledArticle = styled.article`
  box-shadow: ${(props) => props.theme.colors.cardItemShadow};

  .contentWrapper {
    background-color: ${(props) => props.theme.colors.cardItemBg};
    padding: ${rem('20px')} ${rem('10px')};
    margin-top: ${rem('-40px')};
    border-radius: ${rem('5px')};
    margin-left: ${rem('10px')};
    margin-right: ${rem('10px')};
    position: relative;

    a:-webkit-any-link {
      color: ${(props) => props.theme.colors.primaryThemeColor};

      &:hover {
        border-bottom: 1px solid
          ${(props) => props.theme.colors.primaryThemeColor};
      }
    }

    img {
      width: 100%;
      height: auto;
    }

    @media ${(props) => props.theme.screen.tablet} {
      padding: ${rem('30px')} ${rem('40px')};
      margin-top: ${rem('-140px')};
      margin-left: ${rem('30px')};
      margin-right: ${rem('30px')};
    }

    @media ${(props) => props.theme.screen.laptop} {
      margin-top: ${rem('-120px')};
    }

    @media ${(props) => props.theme.screen.laptopL} {
      padding: ${rem('50px')} ${rem('70px')};
      margin-top: ${rem('-250px')};
      border-radius: ${rem('10px')};
      margin-left: 0;
      margin-right: 0;
    }

    &__social {
      display: flex;
      justify-content: center;

      h4 {
        text-align: center;
      }
    }

    &--about {
      @media ${(props) => props.theme.screen.laptopL} {
        margin: ${rem('70px')} 0;
      }
    }
  }
`;

export default StyledArticle;
