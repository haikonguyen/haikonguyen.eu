import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-scroll';
import { rem } from 'polished';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import TemporaryDrawer from '../MaterialUi/TemporaryDrawer.component';

import { NavLinks } from './Links';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: ${props =>
      props.show ? props.theme.colors.navBarColor : 'transparent'};
    box-shadow: ${props =>
      props.show ? `0 0.5rem 2rem rgba(0, 0, 0, 0.65)` : `none`};
    transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
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

  .desktopNav {
    display: none;
    min-height: ${rem('48px')};
    .MuiGrid-root {
      min-height: ${rem('48px')};
      display: flex;
      align-items: center;
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

    @media ${props => props.theme.screen.laptop} {
      display: block;
    }
  }
`;

const DenseAppBar = props => {
  const { themeToggler, lightTheme, showOnScroll } = props;

  return (
    <StyledAppBar position='fixed' show={showOnScroll ? 1 : 0}>
      <Toolbar className='mobileNav' variant='dense'>
        <TemporaryDrawer themeToggler={themeToggler} lightTheme={lightTheme} />
      </Toolbar>

      <Container className='desktopNav' fixed>
        <Grid container>
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
        </Grid>
      </Container>
    </StyledAppBar>
  );
};

export default DenseAppBar;
