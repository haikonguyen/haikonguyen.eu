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
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import TemporaryDrawer from '../MaterialUi/TemporaryDrawer.component';
import { NavLinks } from './Links';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: ${props => props.theme.colors.navBarColor};
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.65);
    visibility: ${props => (props.show ? 'visible' : 'hidden')};
    transition: all 200ms ${props => (props.show ? 'ease-in' : 'ease-out')};
    transform: ${props => (props.show ? 'none' : 'translate(0, -100%)')};
  }

  .mobileNav {
    @media ${props => props.theme.screen.tablet} {
      display: none;
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
      color: ${props => props.theme.colors.bodyTextColor};
      cursor: pointer;
      position: relative;
      padding: ${rem('16px')};
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;

      &--active {
        color: ${props => props.theme.colors.primaryThemeColor};
      }

      &:after {
        bottom: 0;
        content: '';
        display: block;
        height: ${rem('3px')};
        left: 50%;
        position: absolute;
        background: ${props => props.theme.colors.primaryThemeColor};
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

    @media ${props => props.theme.screen.tablet} {
      display: block;
    }
  }
`;

const DenseAppBar = () => {
  const [activeLink, setActiveLink] = useState(undefined);
  const [showOnScroll, setShowOnScroll] = useState(false);

  const onClickLinkItem = index => {
    setActiveLink(index);
  };

  useScrollPosition(({ currPos }) => {
    currPos.y < -150 ? setShowOnScroll(true) : setShowOnScroll(false);
  });

  return (
    <StyledAppBar position='fixed' show={showOnScroll ? 1 : 0}>
      <Hidden>
        <Toolbar className='mobileNav' variant='dense'>
          <TemporaryDrawer />
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
                key={index}
              >
                {link.name}
              </Link>
            ))}
          </Typography>
        </Grid>
      </Container>
    </StyledAppBar>
  );
};

export default DenseAppBar;
