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
  bottom: ${rem('50px')};
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
  box-shadow: ${props => (props.showOnScroll ? 'visible' : 'hidden')};
  cursor: pointer;
  opacity: ${props => (props.showOnScroll ? 1 : 0)};
  visibility: ${props => (props.showOnScroll ? 'visible' : 'hidden')};
  transition: all 200ms
    ${props => (props.showOnScroll ? 'ease-in' : 'ease-out')};
  box-shadow: ${props =>
    props.lightTheme ? props.theme.colors.cardItemShadow : 'none'};

  .chevron {
    &--up {
      fill: ${props => props.theme.colors.bodyTextColor};
    }
  }

  &:hover {
    background-color: ${props => props.theme.colors.primaryThemeColor};
  }
`;

const GoUp = props => {
  const { showOnScroll, lightTheme } = props;
  return (
    <StyledGoUp
      lightTheme={lightTheme}
      showOnScroll={showOnScroll}
      onClick={() => scrollToTop()}
    >
      <ExpandLessIcon className='chevron--up' />
    </StyledGoUp>
  );
};

export default GoUp;
