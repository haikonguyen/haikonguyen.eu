import React from 'react';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { rem } from 'polished';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const scrollToTop = () => {
  scroll.scrollToTop({
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart'
  });
};

const StyledGoUp = styled.div`
  position: fixed;
  right: ${rem('25px')};
  bottom: ${rem('25px')};
  z-index: 5;
  line-height: ${rem('40px')} !important;
  height: ${rem('40px')};
  width: ${rem('40px')};
  color: #fff;
  font-size: ${rem('30px')};
  border-radius: 50%;
  background-color: ${props => props.theme.colors.goUpBg};
  text-align: center;
  border: none;
  box-shadow: 0 ${rem('2px')} ${rem('6px')} 0 rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.primaryThemeColor};
  }
`;

const GoUp = () => {
  return (
    <StyledGoUp onClick={() => scrollToTop()}>
      <ExpandLessIcon />
    </StyledGoUp>
  );
};

export default GoUp;
