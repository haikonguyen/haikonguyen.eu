import styled from 'styled-components';
import { rem } from 'polished';
import Card from '@material-ui/core/Card';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${rem('1140px')};
  margin: 0 auto;
  grid-gap: 20px;

  @media ${(props) => props.theme.screen.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.screen.laptopL} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledCard = styled(Card)`
  && {
    background-color: ${(props) => props.theme.colors.cardItemBg};
    color: ${(props) => props.theme.colors.bodyTextColor};
    box-shadow: ${(props) => props.theme.colors.cardItemShadow};
  }

  .cardActionArea {
    &__placeholder {
      height: ${rem('150px')};
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  .cardContent {
    min-height: ${rem('172px')};

    h2 {
      font-size: ${rem('24px')};
    }

    p {
      font-size: ${rem('16px')};
      line-height: ${rem('22px')};
      text-align: justify;
    }
  }
  .styledLink {
    color: ${(props) => props.theme.colors.primaryThemeColor};
    text-decoration: none !important;
  }
`;
