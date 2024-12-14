import React from 'react';
import styled from 'styled-components';
import HorizontalHeader from '../../atomic/HorizontalHeader';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Icon from '../../atomic/Icon';
import CreateClubForm from '../../molecule/CreateClubForm';
import VerticalSidebar from '../../molecule/VerticalSidebar';

// Add dynamic styling to this component
export const ClubCreate = () => {
  const navigate = useNavigate();

  return (
    <DashboardContainer>
      <VerticalSidebar />
      <MainContentContainer>
        <HorizontalHeader
          rightElement={
            <StyledIcon
              icon={faUser}
              alt="Profile Icon"
              text="Profile"
              onClick={() => navigate('/profile')}
            />
          }
        >
          <Title>Create your club</Title>
        </HorizontalHeader>
        <CreateClubForm />
      </MainContentContainer>
    </DashboardContainer>
  );
};

const Title = styled.h2`
  text-align: center;
  margin-left: 6rem;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const StyledIcon = styled(Icon)`
  margin-top: 2rem;
`;
