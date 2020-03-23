import Button from '@material-ui/core/Button';
import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const StyledButton = styled(Button)`
  && {
    color: ${props => props.theme.colors.primaryThemeColor};
    border: ${rem('1px')} solid ${props => props.theme.colors.primaryThemeColor};

    &:hover {
      border: 1px solid ${props => props.theme.colors.buttonHover};
      background-color: ${props => props.theme.colors.buttonHOverBg};
      color: ${props => props.theme.colors.buttonHover};
    }
  }
`;

const CustomBtn = props => {
  const { text, onClick } = props;
  return (
    <StyledButton onClick={onClick} size='large' variant='outlined'>
      {text}
    </StyledButton>
  );
};

export default CustomBtn;
