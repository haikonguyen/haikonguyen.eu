import React, { useState } from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-scroll';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { rem } from 'polished';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import TemporaryDrawer from '../MaterialUi/TemporaryDrawer.component';

import { NavLinks } from './Links';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: ${props => props.theme.colors.navBarColor};
    box-shadow: ${props =>
      props.show ? `0 0.5rem 2rem rgba(0, 0, 0, 0.65)` : `none`};
    visibility: ${props => (props.show ? 'visible' : 'hidden')};
    transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
    opacity: ${props => (props.show ? 1 : 0)};
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
  const [activeLink, setActiveLink] = useState(undefined);

  const onClickLinkItem = index => {
    setActiveLink(index);
  };

  return (
    <StyledAppBar position='fixed' show={showOnScroll ? 1 : 0}>
      <Hidden>
        <Toolbar className='mobileNav' variant='dense'>
          <TemporaryDrawer
            themeToggler={themeToggler}
            lightTheme={lightTheme}
          />
        </Toolbar>
      </Hidden>

      <Container className='desktopNav' fixed>
        <Grid container>
          <Typography>
            {NavLinks.map((link, index) => (
              <Link
                activeClass='active'
                className={
                  activeLink === index
                    ? 'navLinks navLinks--active'
                    : 'navLinks'
                }
                to={link.href}
                smooth
                spy
                onClick={() => onClickLinkItem(index)}
                key={link.id}
              >
                {link.name}
              </Link>
            ))}
          </Typography>
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
