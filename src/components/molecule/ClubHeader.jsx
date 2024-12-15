import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Icon from '../atomic/Icon';
import HorizontalHeader from '../atomic/HorizontalHeader';
import { ClubLogo } from '../atomic/ClubLogo';
import { useNavigate } from 'react-router-dom';
import { faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Button from '../atomic/Button';
import useAttemptLocal from '../../hooks/useAttemptLocal';
import { followClub, unfollowClub, isFollowing } from '../../api';

const ClubHeader = ({ banner, logo, name, clubID }) => {
  const navigate = useNavigate();
  const [following, setFollowing] = useState(false);
  const { authToken } = useAttemptLocal();

  const handleFollowClick = async () => {
    try {
      if (following) {
        const response = await unfollowClub({ clubID }, authToken);
        console.log('Unfollow Club Response:', response);
      } else {
        const response = await followClub({ clubID }, authToken);
        console.log('Follow Club Response:', response);
      }
      // Update the state only after a successful API call
      setFollowing(!following);
    } catch (error) {
      console.error('Error Following/Unfollowing Club:', error);
    }
  };

  useEffect(() => {
    const fetchAPIData = async () => {
      try {
        if (!authToken || clubID === 0) return;
        const response = await isFollowing({ clubID }, authToken);
        setFollowing(response.isFollowing);
      } catch (error) {
        console.error('Error Fetching Follow Status:', error);
      }
    };

    fetchAPIData();
  }, [authToken, clubID]);

  return (
    <StyledHeader
      bannerImage={banner}
      rightElement={
        <Icon
          icon={faUser}
          alt="Profile Icon"
          text="Profile"
          onClick={() => navigate('/profile')}
        />
      }
      leftElement={
        <Icon
          icon={faArrowLeft}
          alt="Back Arrow"
          onClick={() => navigate(-1)}
        />
      }
    >
      <AlignLeftContainer>
        <StyledLogo
          src={logo || 'https://via.placeholder.com/100'}
          alt="Club Logo"
        />
        <AlignLeftContainerStacking>
          <ClubName>{name}</ClubName>
          <Button
            text={following ? 'Following' : 'Follow'}
            variant={following ? 'fill' : 'outline'}
            onClick={handleFollowClick}
            color="black"
          />
        </AlignLeftContainerStacking>
      </AlignLeftContainer>
    </StyledHeader>
  );
};

export default ClubHeader;

// Styled Components
const StyledHeader = styled(HorizontalHeader)`
  background-image: ${({ bannerImage }) =>
    bannerImage ? `url(${bannerImage})` : 'none'};
  background-size: cover;
  background-position: center;
  height: 175px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const AlignLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 175px;
  gap: 2rem;
`;

const AlignLeftContainerStacking = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 175px;
  gap: 2rem;

  /* Stack elements vertically on smaller screens */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: auto; /* Adjust height to fit content */
    text-align: center;
    margin-top: 1rem;
  }
`;

const ClubName = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }
`;

const StyledLogo = styled(ClubLogo)`
  width: 100px;
  height: 100px;
  margin-bottom: 2.5rem;

  /* Media query to shrink logo to half size on smaller screens */
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
  }
`;
