import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';
import CustomBtn from '../materialui/button.component';
import TemporaryDrawer from '../materialui/drawer.component';
import config from '../../../data/SiteConfig';
import StyledAppBar from './navigation.style';
import mainLogo from '../../img/mainLogoOptimized.png';

const Nav = (props) => {
  const { themeToggler, lightTheme, showOnScroll } = props;

  return (
    <StyledAppBar
      position={showOnScroll ? 'fixed' : 'absolute'}
      showonscroll={showOnScroll ? 1 : 0}
    >
      <Toolbar className='mobileNav' variant='dense'>
        <TemporaryDrawer themeToggler={themeToggler} lightTheme={lightTheme} />
      </Toolbar>

      <div className='destkopNav'>
        <section className='destkopNav__logo'>
          <IconButton aria-label='menu' onClick={() => navigate('/')}>
            <img src={mainLogo} alt='The logo' />
          </IconButton>
        </section>

        <section className='destkopNav__links'>
          {config.navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              activeClassName='destkopNav__links--active'
            >
              <CustomBtn
                className={
                  showOnScroll
                    ? 'navLinks__btn navLinks__btn--scrolled'
                    : 'navLinks__btn'
                }
                size='large'
                text={link.name}
              />
            </Link>
          ))}
          <IconButton onClick={() => themeToggler()}>
            {lightTheme ? (
              <Brightness4Icon className='themeToggleIcon' />
            ) : (
              <Brightness7Icon className='themeToggleIcon' />
            )}
          </IconButton>
        </section>
      </div>
    </StyledAppBar>
  );
};

export default Nav;
