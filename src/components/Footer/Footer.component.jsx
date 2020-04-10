import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import IconButton from '@material-ui/core/IconButton';
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import config from '../../../data/SiteConfig';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.colors.footerBg};
  color: ${props => props.theme.colors.bodyTextColor};

  .footerWrap {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;

    &__socialIcons {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      &__icon {
        color: ${props => props.theme.colors.bodyTextColor};
      }
    }

    &__copyright {
      border-top: 1px solid ${props => props.theme.colors.MuiButtonRootHover};
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${props => props.theme.colors.bodyTextColor};
      padding: 10px 0;
    }
  }
`;

const renderIcons = iconCase => {
  switch (iconCase) {
    case 'FaFacebookF':
      return <FaFacebookF className='footerWrap__socialIcons__icon' />;
    case 'FaInstagram':
      return <FaInstagram className='footerWrap__socialIcons__icon' />;
    case 'FaTwitter':
      return <FaTwitter className='footerWrap__socialIcons__icon' />;
    case 'FaGithub':
      return <FaGithub className='footerWrap__socialIcons__icon' />;
    default:
      return <FaTwitter />;
  }
};

const Footer = () => {
  const { copyright, userLinks } = config;
  if (!copyright) {
    return null;
  }
  return (
    <StyledFooter>
      <div className='footerWrap'>
        <div className='footerWrap__socialIcons'>
          {userLinks.map(userLink => (
            <a href={userLink.url} target='blank'>
              <IconButton>{renderIcons(userLink.icon)}</IconButton>
            </a>
          ))}
        </div>
        <div className='footerWrap__copyright'>{copyright}</div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
