import React from 'react';
import styled from 'styled-components';
import Icon from '../atomic/Icon';
import HorizontalHeader from '../atomic/HorizontalHeader';
import { ClubLogo } from '../atomic/ClubLogo';
import { useNavigate } from 'react-router-dom';
import { faUser, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ClubHeader = ({ banner, logo, name }) => {
  const navigate = useNavigate();

  return (
    <StyledHeader
      bannerImage={banner} // Pass the bannerImage prop to StyledHeader
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
        <ClubName>{name}</ClubName>
        <ClubLogo
          src={logo || 'https://via.placeholder.com/100'}
          alt="Club Logo"
        />
      </AlignLeftContainer>
    </StyledHeader>
  );
};

export default ClubHeader;

const StyledHeader = styled(HorizontalHeader)`
  background-image: ${({ bannerImage }) =>
    bannerImage ? `url(${bannerImage})` : 'none'};
  background-size: cover;
  background-position: center;
  min-height: 175px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const AlignLeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 175px;
`;

const ClubName = styled.h1`
  /* font-size: 4rem; */
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-left: 6rem;
`;
