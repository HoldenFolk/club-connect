import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageTemplate } from '../../template/index';
import { BackgroundContainer } from '../../molecule/BackgroundContainer.style';
import LoginForm from '../../molecule/LoginForm';
import LandingPageHeader from '../../molecule/LandingPageHeader';
import RegisterForm from '../../molecule/RegisterForm';

export const LoginPage = () => {
    const location = useLocation();

    // Determine the initial state based on the path
    const [isLogin, setIsLogin] = useState(true);
  
    useEffect(() => {
      // Check the pathname to determine if it's a login or signup route
      if (location.pathname === '/signup') {
        setIsLogin(false);
      } else {
        setIsLogin(true);
      }
    }, [location.pathname]);

    return (
        <PageTemplate>
            <BackgroundContainer>
                <LandingPageHeader/>
                { 
                    isLogin ? ( <LoginForm/> ):
                    ( <RegisterForm /> )
                }       
            </BackgroundContainer>
        </PageTemplate>
    );
};
 
