import styled from 'styled-components';
import { rem } from 'polished';
import BackgroundImage from 'gatsby-background-image';

const PostHeader = styled(BackgroundImage)`
  width: 100%;
  height: 25vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  .postHeaderWrap {
    height: 25vh;
    position: relative;

    &__tags {
      position: absolute;
      bottom: ${rem('60px')};
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
        margin-left: 0;
        margin-right: 0;
        bottom: ${rem('280px')};
      }
    }

    @media ${(props) => props.theme.screen.tablet} {
      height: 60vh;
    }

    @media ${(props) => props.theme.screen.laptopL} {
      height: 100vh;
    }
  }

  @media ${(props) => props.theme.screen.tablet} {
    height: 60vh;
  }

  @media ${(props) => props.theme.screen.laptopL} {
    height: 100vh;
  }
`;

export const StyledPlaceholder = styled.section`
  width: 100%;
  height: 25vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default PostHeader;
