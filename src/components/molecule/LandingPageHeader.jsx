// Author: Holden Folk
import React from 'react';
import HorizontalHeader from '../atomic/HorizontalHeader';
import Logo from '../atomic/Logo';
import ClickableText from '../atomic/ClickableText';
import { useNavigate } from 'react-router-dom';

const LandingPageHeader = ({ variant = 'light' }) => {
  const navigate = useNavigate();
  const LogoVariant = variant == 'light' ? 'white' : 'dark';
  return (
    <HorizontalHeader>
      <Logo variant={LogoVariant} height={100} />
      <ClickableText
        text="About"
        variant={variant}
        onClick={() => navigate('/about')}
      />
      <ClickableText
        text="Contact"
        variant={variant}
        onClick={() => navigate('/contact')}
      />
      <ClickableText
        text="Dashboard"
        variant={variant}
        onClick={() => navigate('/dashboard')}
      />
    </HorizontalHeader>
  );
};

export default LandingPageHeader;
