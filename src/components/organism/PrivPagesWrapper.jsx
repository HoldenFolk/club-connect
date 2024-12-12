import React from 'react';
import styled from 'styled-components';
import VerticalSidebar from '../molecule/VerticalSidebar';
import HorizontalHeader from '../atomic/HorizontalHeader';
import Icon from '../atomic/Icon';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const PrivPagesWrapper = ({ children }) => {
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
