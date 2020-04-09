import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { rem } from 'polished';

const StyledAppBar = styled(AppBar)`
  && {
    background: ${(props) => props.theme.colors.navBarColor};
    box-shadow: ${(props) =>
      props.show ? `0 0.5rem 2rem rgba(0, 0, 0, 0.65)` : `none`};
    justify-content: center;
    /* position: ${(props) => (props.show ? `fixed` : `relative`)};
    transition: all 0.3s; */

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

    @media ${(props) => props.theme.screen.laptop} {
      display: flex;
      justify-content: flex-end;
    }

    @media ${(props) => props.theme.screen.laptopL} {
      width: 1140px;
      margin: 0 auto;
    }

    .navLinks {
      button {
        padding: 19px;
        color: ${(props) => props.theme.colors.white};

        &.navLinks__btn--scrolled {
          padding: 8px 11px;
        }
      }
      &--active {
        border-bottom: ${rem('3px')} solid
          ${(props) => props.theme.colors.navLinksActive};

        .navLinks__btn {
          color: ${(props) => props.theme.colors.navLinksActive};
        }
      }
    }

    .themeToggleIcon {
      color: ${(props) => props.theme.colors.themeToggleIcon};
    }
  }
`;

export default StyledAppBar;
