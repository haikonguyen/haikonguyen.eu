import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { rem } from 'polished';

const StyledAppBar = styled(AppBar)`
  && {
    /* background: ${(props) => props.theme.colors.navBarColor}; */
    background: ${(props) =>
      props.showonscroll
        ? props.theme.colors.navBarColorFixed
        : props.theme.colors.navBarColorAbs}};
    box-shadow: ${(props) =>
      props.showonscroll ? `0 0.5rem 2rem rgba(0, 0, 0, 0.65)` : `none`};
    justify-content: center;

    @media ${(props) => props.theme.screen.tablet} {
      height: ${(props) => (props.showonscroll ? 'auto' : '70px')};
    }

    transition: background .3s ease-in-out, height .3s ease-in-out;

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
        width: ${(props) => (props.showonscroll ? '30px' : '50px')};
        height: ${(props) => (props.showonscroll ? '30px' : '50px')};
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
