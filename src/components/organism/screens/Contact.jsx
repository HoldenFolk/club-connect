import React from 'react';
import { PageTemplate } from '../../template/index';
import ContactForm from '../../molecule/ContactForm';
import styled from 'styled-components';
import LandingPageHeader from '../../molecule/LandingPageHeader';

export const Contact = () => {
  return (
    <PageTemplate>
        <LandingPageHeader variant = 'black'>
        </LandingPageHeader>
        <FormDiv>
            <ContactForm>
            </ContactForm>
        </FormDiv>
    </PageTemplate>
  );
};


const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 100px;
`;


