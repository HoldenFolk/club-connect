import React, { useEffect, useState } from 'react';
import { PageTemplate } from '../../template/index';
import VerticalSidebar from '../../molecule/VerticalSidebar';
import { useParams } from 'react-router-dom';
import { getClubByName } from '../../../api/club';
import ClubContent from '../ClubContent';
import styled from 'styled-components';

export const ClubPage = () => {
  const { clubName } = useParams();
  const [clubData, setClubData] = useState({
    banner: '',
    category: '',
    clubID: 0,
    description: '',
    email: '',
    logo: '',
    name: '',
    website: '',
  });

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const clubData = await getClubByName(clubName);
        setClubData(clubData);
      } catch (error) {
        console.error('Error fetching clubData:', error);
      }
    };

    fetchUserData();
  }, [clubName]);

  return (
    <PageTemplate>
      <MainContainer>
        <VerticalSidebar />
        <ContentContainer>
          <ClubContent clubData={clubData} />
        </ContentContainer>
      </MainContainer>
    </PageTemplate>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
`;
