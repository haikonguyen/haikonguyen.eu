import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { navigate } from '@reach/router';
import CustomBtn from '../MaterialUi/Button.component';
import TemporaryDrawer from '../MaterialUi/TemporaryDrawer.component';
import { NavLinks } from './Links';
import StyledAppBar from './Navigation.style';

const Nav = (props) => {
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
        {NavLinks.map((link) => (
          <CustomBtn
            size='large'
            onClick={() => navigate(link.href)}
            key={link.id}
            text={link.name}
            color='primary'
          />
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
