import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { NavLinks } from '../Navigation/Links';

const StyledSideList = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  text-transform: uppercase;

  .navLinks {
    margin: 10px 0 0 10px;
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorLeft {
    background: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.bodyTextColor};
  }
`;

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <StyledSideList
      role='presentation'
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      {NavLinks.map(link => (
        <Link
          activeClass='active'
          className='navLinks'
          to={link.href}
          smooth
          spy
        >
          {link.name}
        </Link>
      ))}

      <Divider />
    </StyledSideList>
  );

  return (
    <>
      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer('left', true)}
      >
        <MenuIcon />
      </IconButton>
      <StyledDrawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </StyledDrawer>
    </>
  );
}
