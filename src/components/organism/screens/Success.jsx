import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../../template/index';
import LandingPageHeader from '../../molecule/LandingPageHeader';
import SuccessMessage from '../../atomic/SuccessMessage';

export const Success = () => {
  return (
    <PageTemplate>
      <LandingPageHeader variant="dark"></LandingPageHeader>
      <CenterContainer>
        <SuccessMessage />
      </CenterContainer>
    </PageTemplate>
  );
};

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 100px;
`;

