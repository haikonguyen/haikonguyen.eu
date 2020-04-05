import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { navigate } from '@reach/router';
import { NavLinks } from '../Navigation/Links';

const StyledSideList = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paperAnchorLeft {
    background: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.bodyTextColor};
  }
`;

export default function TemporaryDrawer(props) {
  const { lightTheme, themeToggler } = props;
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const sideList = (side) => {
    return (
      <StyledSideList
        role='presentation'
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <Divider />

        <List>
          {NavLinks.map((link) => (
            <ListItem key={link.id}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText
                onClick={() => navigate(link.href)}
                primary={link.name}
              />
            </ListItem>
          ))}
        </List>
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
      <IconButton onClick={() => themeToggler()}>
        {lightTheme ? (
          <Brightness4Icon className='themeToggleIcon' />
        ) : (
          <Brightness7Icon className='themeToggleIcon' />
        )}
      </IconButton>
    </>
  );
}
