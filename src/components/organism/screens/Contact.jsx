// Author: Torin Andrews
import React from 'react';
import { PageTemplate } from '../../template/index';
import ContactForm from '../../molecule/ContactForm';
import styled from 'styled-components';
import LandingPageHeader from '../../molecule/LandingPageHeader';

export const Contact = () => {
  return (
    <PageTemplate>
      <LandingPageHeader variant="black"></LandingPageHeader>

      <HeaderContainer>Contact Us</HeaderContainer>
      <SubHeader>We would love to hear from you.</SubHeader>

      <FormDiv>
        <ContactForm></ContactForm>
      </FormDiv>
    </PageTemplate>
  );
};

const SubHeader = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 10px;
  opacity: 70%;
`;

const HeaderContainer = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.2;
  /* text-transform: uppercase; */
  margin-top: 2rem;
  opacity: 100%;
`;

const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 100px;
`;
