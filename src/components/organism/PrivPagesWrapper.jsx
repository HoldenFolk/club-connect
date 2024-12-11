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
      <HorizontalHeader
        rightElement={
          <Icon
            icon={faUser}
            alt="Profile Icon"
            text="Profile"
            onClick={() => navigate('/profile')}
          />
        }
      />
      {children}
    </DashboardContainer>
  );
};

export default PrivPagesWrapper;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh;
`;
