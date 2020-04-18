import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { rem } from 'polished';

const StyledAppBar = styled(AppBar)`
  && {
    background: ${(props) => props.theme.colors.navBarColor};
    box-shadow: ${(props) =>
      props.show ? `0 0.5rem 2rem rgba(0, 0, 0, 0.65)` : `none`};
    justify-content: center;

    @media ${(props) => props.theme.screen.tablet} {
      height: ${(props) => (props.show ? 'auto' : '70px')};
    }
  }

  .mobileNav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ${(props) => props.theme.screen.laptop} {
      display: none;
    }

    .themeToggleIcon {
      color: ${(props) => props.theme.colors.themeToggleIcon};
    }
  }

  .destkopNav {
    display: none;

    &__logo {
      img {
        width: ${(props) => (props.show ? '30px' : '50px')};
        height: ${(props) => (props.show ? '30px' : '50px')};
      }
    }

    &__links {
      button {
        height: ${rem('50px')};
        color: ${(props) => props.theme.colors.white};

        &.navLinks__btn--scrolled {
          padding: ${rem('8px')} ${rem('11px')};
        }
      }

      &--active {
        .navLinks__btn {
          color: ${(props) => props.theme.colors.navLinksActive};
          border-bottom: ${rem('3px')} solid
            ${(props) => props.theme.colors.navLinksActive};
          border-radius: 0;
        }
      }

      .themeToggleIcon {
        color: ${(props) => props.theme.colors.themeToggleIcon};
      }
    }

    @media ${(props) => props.theme.screen.laptop} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    @media ${(props) => props.theme.screen.laptopL} {
      width: ${rem('1140px')};
      margin: 0 auto;
    }
  }
`;

export default StyledAppBar;
