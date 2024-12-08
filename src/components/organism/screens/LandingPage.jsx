import React from 'react';
import styled from 'styled-components';
import { PageTemplate } from '../../template/index';
import LandingTitle from '../../molecule/LandingTitle';
import Button from '../../atomic/Button';
import LandingPageHeader from '../../molecule/LandingPageHeader';
import { BackgroundContainer } from '../../molecule/BackgroundContainer.style';
import { useNavigate } from 'react-router-dom';

// Ladning Page Screen Component
// TODO: Test styles on diffent devices
export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <PageTemplate>
      <BackgroundContainer>
        <LandingPageHeader />
        <CenterContainer>
          <LandingTitle />
          <ButtonContainer>
            <Button
              text="Log In"
              variant="fill"
              onClick={() => navigate('/login')}
            />
            <Button
              text="Sign Up"
              variant="outline"
              onClick={() => navigate('/signup')}
            />
          </ButtonContainer>
        </CenterContainer>
      </BackgroundContainer>
    </PageTemplate>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  margin-bottom: 100px;
`;
