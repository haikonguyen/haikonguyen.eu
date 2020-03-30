import Button from '@material-ui/core/Button';
import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const StyledButton = styled(Button)`
  color: ${props => props.theme.colors.primaryThemeColor};
  border: ${rem('1px')} solid ${props => props.theme.colors.primaryThemeColor};

  &:hover {
    background-color: ${props => props.theme.colors.buttonHOverBg};
    color: ${props => props.theme.colors.buttonHover};
  }
`;

const CustomBtn = props => {
  const { text, onClick, size, variant, color } = props;
  return (
    <StyledButton
      style={{ color }}
      onClick={onClick}
      size={size}
      variant={variant}
    >
      {text}
    </StyledButton>
  );
};

export default CustomBtn;
