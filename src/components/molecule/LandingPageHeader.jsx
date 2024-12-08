import React from 'react';
import HorizontalHeader from '../atomic/HorizontalHeader';
import Logo from '../atomic/Logo';
import ClickableText from '../atomic/ClickableText';
import { useNavigate } from 'react-router-dom';

const LandingPageHeader = () => {
  const navigate = useNavigate();

  return (
    <HorizontalHeader>
      <Logo variant="white" height={100} />
      <ClickableText text="About" onClick={() => navigate('/about')} />
      <ClickableText text="Contact" onClick={() => navigate('/contact')} />
      <ClickableText text="Dashboard" onClick={() => navigate('/dashboard')} />
    </HorizontalHeader>
  );
};

export default LandingPageHeader;
