import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import TemporaryDrawer from '../MaterialUi/TemporaryDrawer.component';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: ${props => props.theme.colors.navBarColor};
  }

  .mobileNav {
    @media ${props => props.theme.screen.tablet} {
      display: none;
    }
  }

  .desktopNav {
    display: none;
    min-height: 48px;
    .MuiGrid-root {
      min-height: 48px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .navLinks {
      color: ${props => props.theme.colors.primaryThemeColor};
      cursor: pointer;
      position: relative;
      padding: 0.6rem 1.3rem;
      text-decoration: none;

      &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: '';
        display: block;
        height: 1px;
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
        margin-right: 17px;
      }
    }

    @media ${props => props.theme.screen.tablet} {
      display: block;
    }
  }
`;

export default function DenseAppBar() {
  return (
    <StyledAppBar position='fixed'>
      <Hidden>
        <Toolbar className='mobileNav' variant='dense'>
          <TemporaryDrawer />
        </Toolbar>
      </Hidden>

      <Container className='desktopNav' fixed>
        <Grid container>
          <Typography>
            <Link className='navLinks' href='#section3'>
              Link
            </Link>
            <Link className='navLinks' href='#section3'>
              Link
            </Link>
            <Link className='navLinks' href='#section3'>
              Link
            </Link>
            <Link className='navLinks' href='#section3'>
              Link
            </Link>
          </Typography>
        </Grid>
      </Container>
    </StyledAppBar>
  );
}
