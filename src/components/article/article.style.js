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

    &__meta {
      font-size: 14px;

      &__avatar {
        margin-right: 15px;
      }

      &__text {
        width: 100%;
        max-width: 600px;

        div:first-child {
          display: none;

          @media ${(props) => props.theme.screen.tablet} {
            display: inline-block;
          }
        }

        svg {
          margin: 0 10px 0 0;
          height: 20px;
          width: 20px;
        }

        div {
          flex-basis: 100%;

          @media ${(props) => props.theme.screen.tablet} {
            flex-basis: auto;
            margin-right: 20px;
          }
        }
      }

      .MuiAvatar-circle {
        cursor: pointer;
      }
    }

    &__content {
      margin-top: 30px;

      @media ${(props) => props.theme.screen.laptopL} {
        margin-top: 60px;
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
