import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../../template/index';
import LandingPageHeader from '../../molecule/LandingPageHeader';
import AboutUs from '../../molecule/AboutUs';

export const About = () => {
  return (
    <PageTemplate>
      <LandingPageHeader variant="dark"></LandingPageHeader>
      <CenterContainer>
        <AboutUs></AboutUs>
      </CenterContainer>
    </PageTemplate>
  );
};

// How do I change the LandingPageHeader text colour from in here?

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 100px;
`;
