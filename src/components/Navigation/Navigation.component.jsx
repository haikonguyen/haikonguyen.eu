import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-scroll';
import { rem } from 'polished';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import TemporaryDrawer from '../MaterialUi/TemporaryDrawer.component';

import { NavLinks } from './Links';

const StyledAppBar = styled(AppBar)`
  && {
    background: ${props => props.theme.colors.navBarColor};
    box-shadow: ${props =>
      props.show ? `0 0.5rem 2rem rgba(0, 0, 0, 0.65)` : `none`};
      justify-content: center;
      height: ${props => (props.show ? 'auto' : '70px')};
    /* transition: all 200ms ${props =>
      props.show ? 'ease-in' : 'ease-out'}; */
  }

  .mobileNav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ${props => props.theme.screen.laptop} {
      display: none;
    }

    .MuiSvgIcon-root {
      color: ${props => props.theme.colors.themeToggleIcon};
    }

    .themeToggleIcon {
      color: ${props => props.theme.colors.themeToggleIcon};
    }
  }

  .destkopNav {
    display: none;

    @media ${props => props.theme.screen.laptop} {
      display: flex;
      width: 1140px;
      margin: 0 auto;
      justify-content: flex-end;
    }

    .navLinks {
      color: ${props => props.theme.colors.navLinks};
      cursor: pointer;
      position: relative;
      padding: ${rem('16px')};
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;

      &--active {
        color: ${props => props.theme.colors.navLinksActive};
      }

      &:after {
        bottom: 0;
        content: '';
        display: block;
        height: ${rem('3px')};
        left: 50%;
        position: absolute;
        background: ${props => props.theme.colors.navLinksActive};
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
      color: ${props => props.theme.colors.themeToggleIcon};
    }
  }
`;

const Nav = props => {
  const { themeToggler, lightTheme, showOnScroll } = props;

  return (
    <StyledAppBar
      position={showOnScroll ? 'fixed' : 'relative'}
      show={showOnScroll ? 1 : 0}
    >
      <Toolbar className='mobileNav' variant='dense'>
        <TemporaryDrawer themeToggler={themeToggler} lightTheme={lightTheme} />
      </Toolbar>

      <div className='destkopNav'>
        {NavLinks.map(link => (
          <Link
            activeClass='navLinks--active'
            className='navLinks'
            to={link.href}
            smooth
            spy
            key={link.id}
          >
            {link.name}
          </Link>
        ))}

        <IconButton onClick={() => themeToggler()}>
          {lightTheme ? (
            <Brightness4Icon className='themeToggleIcon' />
          ) : (
            <Brightness7Icon className='themeToggleIcon' />
          )}
        </IconButton>
      </div>
    </StyledAppBar>
  );
};

export default Nav;
