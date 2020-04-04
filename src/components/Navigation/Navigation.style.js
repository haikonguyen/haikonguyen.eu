import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import { rem } from 'polished';

const StyledAppBar = styled(AppBar)`
  && {
    background: ${(props) => props.theme.colors.navBarColor};
    box-shadow: ${(props) =>
      props.show ? `0 0.5rem 2rem rgba(0, 0, 0, 0.65)` : `none`};
    justify-content: center;
    height: ${(props) => (props.show ? 'auto' : '70px')};
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
      color: ${(props) => props.theme.colors.navLinks};
      cursor: pointer;
      position: relative;
      padding: ${rem('16px')};
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;

      &--active {
        color: ${(props) => props.theme.colors.navLinksActive};
      }

      &:after {
        bottom: 0;
        content: '';
        display: block;
        height: ${rem('3px')};
        left: 50%;
        position: absolute;
        background: ${(props) => props.theme.colors.navLinksActive};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }
      &:hover:after {
        width: 100%;
        left: 0;
      }

      :not(:last-child) {
        margin-right: ${rem('17px')};
      }
    }

    .themeToggleIcon {
      color: ${(props) => props.theme.colors.themeToggleIcon};
    }
  }
`;

export default StyledAppBar;
