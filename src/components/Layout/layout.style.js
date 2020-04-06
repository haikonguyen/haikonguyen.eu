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
}

h1 {
    font-size:  ${rem('25px')};

    @media ${(props) => props.theme.screen.tablet} {
      font-size:  ${rem('35px')};
    }
}

h2 {
    font-size:  ${rem('22px')};

    @media ${(props) => props.theme.screen.tablet} {
      font-size:  ${rem('29px')};
    }
}

h3 {
    font-size:  ${rem('20px')};

    @media ${(props) => props.theme.screen.tablet} {
      font-size:  ${rem('25px')};
    }
}

h4 {
    font-size:  ${rem('18px')};

    @media ${(props) => props.theme.screen.tablet} {
      font-size:  ${rem('22px')};
    }
}

a:-webkit-any-link {
  text-decoration: none;
}

.MuiButton-root {
  && {
    color: ${(props) => props.theme.colors.white};

    &:hover {
      background-color: ${(props) => props.theme.colors.MuiButtonRootHover}
    }
  }
}

.MuiButton-containedPrimary {
  && {
    background-color: ${(props) => props.theme.colors.primaryThemeColor};

    &:hover {
      background-color: #1156AA;
    }
  }
}

.MuiButton-outlinedPrimary {
  && {
    color: ${(props) => props.theme.colors.primaryThemeColor};
    border: 1px solid ${(props) => props.theme.colors.primaryThemeColor};

    &:hover {
      border: 1px solid #90caf9;
      background-color: rgba(144, 202, 249, 0.08);
    }
  }
} 

.MuiAppBar-positionFixed {
  && {
    transition: all 0.3s;
    animation: slide-down 0.7s;
  }
}

.MuiIconButton-colorInherit {
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
