import React from 'react';
import styled from 'styled-components';
import { ClubLogo } from '../atomic/ClubLogo';
import ClickableText from '../atomic/ClickableText';
import { useNavigate } from 'react-router-dom';

const Post = ({ title, content, logo, clubName, datePosted, userName }) => {
  console.log('Post Props:', {
    title,
    content,
    logo,
    clubName,
    datePosted,
    userName,
  });

  const navigate = useNavigate();

  return (
    <PostContainer>
      <HorizontalContainer>
        <ContainerLeft>
          {logo && <StyledLogo src={logo} alt="Club Logo" />}
          <ClickableText
            text={clubName}
            variant="dark"
            onClick={() => navigate(`/club/${clubName}`)}
          />
        </ContainerLeft>
        <ContainerRight>
          <UserAndDate>
            Posted On {datePosted} by {userName}
          </UserAndDate>
        </ContainerRight>
      </HorizontalContainer>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
    </PostContainer>
  );
};

export default Post;

const PostContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* x-offset, y-offset, blur-radius, spread-radius, color */
`;

const HorizontalContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;

const ContainerLeft = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-left: 3rem;
`;

const ContainerRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 3rem;
`;

const UserAndDate = styled.h3`
  font-size: 1rem;
  color: #6c757d;
`;

const PostTitle = styled.h1`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.fourth};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-left: 3rem;
  font-weight: 300;
`;

const StyledLogo = styled(ClubLogo)`
  height: 50px;
  width: 50px;
  margin-right: 1rem;
`;

const PostContent = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.fourth};
  margin-left: 3rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 300;
`;
