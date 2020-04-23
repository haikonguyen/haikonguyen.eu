import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';

export const GlobalStyle = createGlobalStyle`
body {
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.colors.backgroundColor};
  color: ${(props) => props.theme.colors.bodyTextColor};
  outline: none;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;

  overflow-wrap: break-word;
  word-wrap: break-word;

  outline: none;
}

h1 {
  font-size: ${rem('25px')};

  @media ${(props) => props.theme.screen.tablet} {
    font-size: ${rem('35px')};
  }
}

h2 {
  font-size: ${rem('22px')};

  @media ${(props) => props.theme.screen.tablet} {
    font-size: ${rem('29px')};
  }
}

h3 {
  font-size: ${rem('20px')};

  @media ${(props) => props.theme.screen.tablet} {
    font-size: ${rem('25px')};
  }
}

h4 {
  font-size: ${rem('18px')};

  @media ${(props) => props.theme.screen.tablet} {
    font-size: ${rem('22px')};
  }
}

p {
  line-height: ${rem('24px')};

  @media ${(props) => props.theme.screen.tablet} {
    line-height: ${rem('26px')};
  }
}

a:-webkit-any-link {
  text-decoration: none;
}

.container {
  padding: ${rem('70px')} ${rem('15px')};

  &--fluid {
    width: 100%;
  }

  &--fixed {
    margin: 0 auto;
    max-width: ${rem('1140px')};

  }

}

.MuiButton-textPrimary {
  && {
  color: ${(props) => props.theme.colors.bodyTextColor};
  }
}

@keyframes slide-down {
  0% {
      transform: translateY(-100%);
  } 
  100% {
      transform: translateY(0);
  } 
}
`;
