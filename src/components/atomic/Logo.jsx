// Author: Holden Folk
import React from 'react';
import logo_white from '../../assets/logo_white.png';
import logo_black from '../../assets/logo_black.png';
import { useNavigate } from 'react-router-dom';

// Custom logo component with a white and black variant
const Logo = ({ variant = 'white', height = 80, ...props }) => {
  const src = variant === 'white' ? logo_white : logo_black;
  const navigate = useNavigate();

  return (
    <img
      src={src}
      alt="My Clubs Logo"
      height={height}
      onClick={() => navigate('/')}
      style={{ cursor: 'pointer' }}
      {...props}
    />
  );
};

export default Logo;
