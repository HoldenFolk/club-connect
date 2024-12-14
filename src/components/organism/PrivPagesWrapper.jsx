import React from 'react';
import styled from 'styled-components';
import VerticalSidebar from '../molecule/VerticalSidebar';
import HorizontalHeader from '../atomic/HorizontalHeader';
import Icon from '../atomic/Icon';
import { faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const PrivPagesWrapper = ({ children }) => {
  const navigate = useNavigate();

  return (
    <DashboardContainer>
      <VerticalSidebar />
      <MainContentContainer>
        <HorizontalHeader
          leftElement={
            <StyledIcon
              icon={faPlus}
              text="Create Club"
              onClick={() => navigate('/clubcreate')}
            />
          }
          rightElement={
            <StyledIcon
              icon={faUser}
              alt="Profile Icon"
              text="Profile"
              onClick={() => navigate('/profile')}
            />
          }
        />
        {children}
      </MainContentContainer>
    </DashboardContainer>
  );
};

export default PrivPagesWrapper;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 1rem;
`;

const StyledIcon = styled(Icon)`
  margin-top: 2rem;
`;
