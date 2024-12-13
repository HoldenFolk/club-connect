import React from 'react';
import styled from 'styled-components';
import ClubHeader from '../molecule/ClubHeader';
import ClickableText from '../atomic/ClickableText';

const ClubContent = ({ clubData }) => {
  const { name, logo, banner, category, description, website } = clubData;

  return (
    <ClubContainer>
      <ClubHeader name={name} logo={logo} banner={banner} />
      <ClubInfo>
        <ClubCategory>Category: {category}</ClubCategory>
        <ClubDescription>{description}</ClubDescription>
        {website && (
          <ClickableText
            variant="dark"
            text="Visit Club Website"
            onClick={website}
          />
        )}
      </ClubInfo>

      {/* Placeholder for the PostFeed component */}
      <PostFeedPlaceholder>Nothing Here Yet...</PostFeedPlaceholder>
    </ClubContainer>
  );
};

export default ClubContent;

// Styled Components for ClubContent
const ClubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  height: 100vh;
`;

const ClubInfo = styled.div`
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`;

const ClubCategory = styled.h3`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 20px;
`;

const ClubDescription = styled.p`
  font-size: 1rem;
  color: #343a40;
  margin-bottom: 20px;
`;

const PostFeedPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6c757d;
  font-size: 1.5rem;
  margin-top: 20px;
  border-radius: 8px;
`;
