import React, { useState } from 'react';
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

    &--active {
      color: ${props => props.theme.colors.primaryThemeColor};
    }
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

  const sideList = side => {
    const [activeLink, setActiveLink] = useState(undefined);

    const onClickLinkItem = index => {
      setActiveLink(index);
    };

    return (
      <StyledSideList
        role='presentation'
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        {NavLinks.map((link, index) => (
          <Link
            activeClass='active'
            className={
              activeLink === index ? 'navLinks navLinks--active' : 'navLinks'
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

        <Divider />
      </StyledSideList>
    );
  };

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
