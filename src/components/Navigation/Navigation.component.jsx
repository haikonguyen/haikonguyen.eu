import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TemporaryDrawer from '../MaterialUi/TemporaryDrawer.component';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: ${props => props.theme.navBarColor};
  }
`;

export default function DenseAppBar() {
  return (
    <StyledAppBar position='static'>
      <Toolbar variant='dense'>
        <TemporaryDrawer />
      </Toolbar>
    </StyledAppBar>
  );
}
