import React from 'react';
import { PageTemplate } from '../../template/index';
import { BackgroundContainer } from '../../molecule/BackgroundContainer.style';
import FormPopup from '../../molecule/FormPopup';
import LandingPageHeader from '../../molecule/LandingPageHeader';

export const LoginPage = () => {
    return (
        <PageTemplate>
            <BackgroundContainer>
                <LandingPageHeader/>
                <FormPopup/>
            </BackgroundContainer>
        </PageTemplate>
    );
};
 
