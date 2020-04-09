import styled from 'styled-components';
import { rem } from 'polished';
import BackgroundImage from 'gatsby-background-image';

export const PostHeader = styled(BackgroundImage)`
  width: 100%;
  height: 25vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .postHeaderWrap {
    max-width: ${rem('1140px')};
    margin: 0 auto;
    height: 25vh;
    position: relative;

    &__tags {
      position: absolute;
      bottom: 60px;
      left: 0;
      margin-left: ${rem('10px')};

      button {
        background-color: rgba(255, 255, 255, 0.1);
        margin-right: 10px;
        color: white;

        :hover {
          background-color: rgba(255, 255, 255, 0.4);
        }
      }

      @media ${(props) => props.theme.screen.tablet} {
        bottom: ${rem('160px')};
        margin-left: ${rem('30px')};
      }

      @media ${(props) => props.theme.screen.laptop} {
        bottom: ${rem('140px')};
      }

      @media ${(props) => props.theme.screen.laptopL} {
        bottom: ${rem('100px')};
        margin-left: 0;
        margin-right: 0;
      }
    }

    @media ${(props) => props.theme.screen.tablet} {
      height: 60vh;
    }

    @media ${(props) => props.theme.screen.laptop} {
      height: 80vh;
    }
  }

  @media ${(props) => props.theme.screen.tablet} {
    height: 60vh;
  }

  @media ${(props) => props.theme.screen.laptop} {
    height: 80vh;
  }
`;

export const StyledPlaceholder = styled.section`
  width: 100%;
  height: 25vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledContainer = styled.main`
  max-width: ${rem('1140px')};
  margin: 0 auto;
  box-shadow: ${(props) => props.theme.colors.cardItemShadow};

  .contentWrapper {
    background-color: ${(props) => props.theme.colors.cardItemBg};
    padding: ${rem('20px')} ${rem('10px')};
    margin-top: ${rem('-40px')};
    border-radius: ${rem('5px')};
    margin-left: ${rem('10px')};
    margin-right: ${rem('10px')};
    position: relative;

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
      margin-top: ${rem('-80px')};
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
  }
`;

export default StyledContainer;
