import React from 'react';
import styled from 'styled-components';
import logo_white from '../../assets/logo_white.png'
import logo_black from '../../assets/logo_black.png'

const Logo = ({variant = 'white', ...props}) => {
    const src = (variant === 'white') ? logo_white : logo_black;

    return (
        <img src={src} height={80} alt='My Clubs Logo' {...props} />
    )
};

export default Logo;